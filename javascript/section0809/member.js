/*member.js*/

function getID(){
    //alert();
    //<input type="text" id="uid">  접근

    //1) <form>의 컨트롤 요소 접근시 id사용(추천)
    //alert(document.getElementById("uid"));
    //alert(document.getElementById("uid").value);
    //2) 
    //alert(document.getElementsByName("uid").value);
    //alert(document.getElementsByName("uid").value);
    //3)
    //alert(document.getElementsByName("uid")[0].value);
    //alert(document.memfrm.uid.value); // 비추천
    //3)
    // 본문에서 <input> 태그를 접근
    // [object HTMLCollection]
    // alert(document.getElementsByTagName("input"));

    //alert(document.getElementsByTagName("input")[1]);

    // 실제값
    //alert(document.getElementsByTagName("input")[1].value);


    //4)
    // alert(document.getElementsByClassName("line"));
    
    function setID(){
        //<input type="text" id="uid">에 값 대입하기.

        let str="오필승코리아";
        
        //1) id접근(추천)
        //document.getElementsByTagName("uid")[0].value=str;

        //3) tag name 접근
        //document.getElementsByTagName("input")[1].value=str;

    } // setID() end
}

function validate() {
    // 회원가입 폼에 대한 유효성 검사

    // 1)이름 글자갯수 2글자 이상인지 확인 하시오.
    // 위의 조건을 만족하지 않으면
    // -> 경고창 (alert)
    // -> 이름을 다시 입력할 수 있도록 id=uname에 커서를 생성해주고 
    // -> 해당 폼이 서버로 전송하는 것을 차단.

    let uname=document.getElementById("uname").value;
    //alert(uname);
   //alert("#"+uname.trim()+"#");

   if(uname.length<2){
    alert("이름 2글자 이상 입력해 주세요~");
    document.getElementById("uname").focus();
    return false;
   }

    // 2)아이디 글자갯수가 8~12사이 먼저 확인하시오
   /*et uid=document.getElementById("uid").value;
   if(uid.length>=8 && uid.length<=12){
    alert("아이디 글자 8글자 이상 12글자 이하 입력해 주세요~");
    document.getElementById("uid").focus();
    return false;
   }*/

    // 3) 비밀번호 글자갯수가 5~10사이인지 확인하시오

    //4) 주민번호 앞칸의 글자갯수가 6인지 확인하시오

    //5) 주민번호 뒷칸의 글자갯수가 7이면서 숫자형인지 확인하시오

    //6) 약관동의에 체크했는지 확인하시오
    if(document.getElementById("agree").checked==false){
        alert("약관에 동의해 주세요!!");
        return false;
    }// if end

    alert("회원 가입 폼을 서버로 전송합니다.");
    return true; //<form name=memfrm>폼을 서버로 전송
}