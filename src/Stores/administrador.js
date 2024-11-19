import {defineStore} from "pinia"
import axios from "axios"
import {ref} from "vue"

export const useAdminStore = defineStore("admin",()=>{
    let loading = ref(false)
    const inicio = async (email,password) =>{
        try {
            loading.value=true
            let datos = await axios.post(`http://localhost:4000/api/administrador/token`,{
                email:email,password:password
            });

        return datos
        }
        catch (error){
            loading.value=true
            throw error;
        }finally{
            loading.value=false
        }
    }
    
    return{
        inicio, loading
    }
})
