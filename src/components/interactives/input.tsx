export default function Input (props:{label:string, value?:string, onChange?:(e:any)=>void}) {
    const {label, value, onChange}= props;
    return(
        <div className="rounded-full w-full border-2 border-gray-500 bg-white/10  backdrop-blur-sm">
            <input value={value} onChange={onChange} className=" w-full p-3 px-4 bg-transparent text-md outline-none placeholder:text-gray-300" type="text" placeholder={label}/>
        </div>
    )
}   