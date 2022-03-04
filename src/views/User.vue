<template>
    <NavAdmin />
    <div class="container mx-auto">
        <div v-for="user in users" :key="user.id" class="flex justify-between border-l border-b border-r p-2">
            <div>
                <p>{{ user.email }}</p>
                <p>{{ user.password }}</p>
            </div>
            
            <div>
                <button @click="deleteUser(user.id)">
                    <svg
                        class="inline-block text-red-500 ml-2 w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase';
import { collection, query, onSnapshot, orderBy, doc, deleteDoc } from 'firebase/firestore';
import NavAdmin from '../components/NavAdmin.vue';

export default {
    data() {
        return {
            users: []
        };
    },
    methods: {
        async deleteUser(id) {
            await deleteDoc(doc(db, "users", id));
        },
    },
    created() {
        const q = query(collection(db, "users"), orderBy("timestamp", "desc"));
        onSnapshot(q, (ns) => {
            this.users = ns.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    },
    components: { NavAdmin }
}
</script>

<style>
</style>