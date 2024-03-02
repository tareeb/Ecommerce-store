// take string userid and return a string of user id fucntion 

export default function getCustomerId(userId: string | null ): string {

    console.log("userId" , userId);

    if (!userId) {
        return "" ;
    }else if (userId == "user_2cpHxVUdIVuahhO6Z3kxmaB2x3b" ){
        return "12346"  //areeb
    }else if (userId == "user_2coxDZZAfrBYbj46XOBk1QfFvUp" ){
        return "17850"  //zubair
    }

    return "123"; // new user
}