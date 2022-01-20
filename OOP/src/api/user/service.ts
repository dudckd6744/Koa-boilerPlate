
export default class UserService {
    dao : any
    constructor(dao){
        this.dao = dao
    }

    test (){
        this.dao.test()

    }
}