export default class Users{

  constructor(
    private userName:string,
    private userEmail:string,
    private userPhone:string,
    private userAddress:string
  ) {
  }

  toPlainObject() {
    return {
      userName: this.userName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      userAddress: this.userAddress,
    };
  }

}
