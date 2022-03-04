<template>

 <NavAdmin/>
  <div class="container mx-auto p-2">
    <input
      type="text"
      v-model="title"
      placeholder="Tiêu đề"
      class="px-4 py-2 block bg-gray-100 my-2 rounded-lg focus:ring-1 outline-none"
    />
    <input
      type="text"
      v-model="url"
      placeholder="Link URL"
      class="px-4 py-2 block bg-gray-100 my-2 rounded-lg focus:ring-1 outline-none"
    />
    <button
      @click="addProduct"
      class="px-4 py-2 block bg-green-600 text-white my-2 rounded-lg hover:bg-green-700"
    >THÊM</button>
    <div class="overflow-auto">
      <table class="bg-gray-100 border">
        <tr class="bg-gray-300 font-semibold">
          <td class="py-2 px-4">Hình ảnh</td>
          <td class="py-2 px-4">Tiêu đề</td>
          <td class="py-2 px-4">Thao tác</td>
        </tr>
        <tr v-for="product in products" :key="product.id" class="border-b">
          <td class="py-2 px-4">
            <img :src="product.url" alt class="w-20" />
          </td>
          <td class="py-2 px-4">{{ product.title }}</td>
          <td class="py-2 px-4 text-center">
            <button
              @click="deleteProduct(product.id)"
              class="py-0.5 px-2 bg-red-500 hover:bg-red-600 text-white rounded-lg mr-1 mb-1"
            >Xóa</button>
            <button
              @click="updateProduct(product.id, product.title, product.url)"
              class="py-0.5 px-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg"
            >Sửa</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from '../firebase';
import { collection, query, onSnapshot, serverTimestamp, orderBy, doc, deleteDoc, updateDoc, addDoc } from 'firebase/firestore';
import NavAdmin from '../components/NavAdmin.vue';

export default {
    data() {
        return {
            title: "",
            url: "",
            products: []
        };
    },
    methods: {
      
        async addProduct() {
            addDoc(collection(db, "products"), {
                title: this.title,
                url: this.url,
                timestamp: serverTimestamp()
            });
            this.$swal.fire({
              toast: true,
              timer: 3000,
              icon: 'success',
              position: 'top-end',
                title: 'Đã thêm',
                showConfirmButton: false,
                
            })
            this.title = "";
            this.url = "";
        },
        async deleteProduct(id) {
            
            this.$swal.fire({
              toast: true,
              timer: 3000,
              icon: 'success',
              position: 'top-end',
                title: 'Đã xóa',
                showConfirmButton: false,
                
            })
            await deleteDoc(doc(db, "products", id));
        },
        async updateProduct(id, title, url) {
            const t = prompt("Tiêu đề", title);
            const u = prompt("URL", url);
            await updateDoc(doc(db, "products", id), {
                title: t,
                url: u
            });
            this.$swal.fire({
              toast: true,
              timer: 3000,
              icon: 'success',
              position: 'top-end',
                title: 'Đã cập nhật',
                showConfirmButton: false,
                
            })
        },
    },
    created() {
        const q = query(collection(db, "products"), orderBy("timestamp", "desc"));
        onSnapshot(q, (ns) => {
            this.products = ns.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    },
    components: { NavAdmin }
}
</script>

<style>
</style>