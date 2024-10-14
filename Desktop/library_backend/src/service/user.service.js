
class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }
    //Librarian
    async getUserById(userId){
        const data=await this.userRepository.getUserById(userId);
        return data;
    }
    //Librarian
    async getAllUsers(){
        const data=await this.userRepository.getAllUsers();
        return data;
    
    }
    //Librarian
    async updateUser(userId,userData){
        const data=await this.userRepository.updateUser(userId,userData);
        return data;
    }
    //Librarian
    async createUser(userData){
        const data=await this.userRepository.createUser(userData);
        return data;
    
    }
    //Librarian
    async deleteUser(userId){
        const data=await this.userRepository.deleteUser(userId);
        return data;
    }
    //utility 
    async getUserByEmail(emailId){
        const data=await this.userRepository.getUserByEmail(emailId);
        return data;
    }




}
module.exports=UserService;