import  {reactive} from "vue"



function add(arrs) {
    let stu = reactive({
        name: "",
        age: "",
        male: "",
    });

    function additemBtn(e) {
        e.preventDefault();
        console.log(stu);
        let stus = Object.assign({}, stu);
        arrs.push(stus);
        stu.name = null;
        stu.age = null;
        stu.male = null;
    }
    return {
        stu,
        additemBtn
    };
}
export default add;