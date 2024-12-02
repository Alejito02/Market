import usuariosModel from "../models/usuarios.js";

const helperUsuarios = {
    emailYaRegistrado: async (email) => {
        const usuario = await Usuario.findOne({ email });
        if (usuario) {
            throw new Error("El email ya está registrado");
        }
    },
    validarId: async (id)=>{
        const existe = await usuariosModel.findById(id)
        if(!existe){
            throw new Error ( "el id no existe")
        }
    }
}

export default helperUsuarios