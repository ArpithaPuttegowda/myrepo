const validataion=({name,password,email})=>{
 let errors={};
 if(!name){
     errors.name="Please enter the name"
 }
 if(!password){
     errors.password="Please enter the password"
 }
 if(!email){
     errors.email="Please enter the email"
 }
 return errors;
}
export default validataion;