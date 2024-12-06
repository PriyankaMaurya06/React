const PropsChild1 = (props) => {
    console.log(props); //{data:{data,arr}}
    let {data:{data,arr}} = props;
    console.log(data);


    return (
        <div>
            {/* <h2>Props child 1 {props.data}</h2> */}
            <h2>Props child 1 {data}</h2>
        </div>
    );
};
export default PropsChild1;