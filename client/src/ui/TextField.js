const TextField=(({ styles, label, component: Component = "input", ...rest }, )=>{
console.log("rest",rest);
return(
    <div className={styles}>
    <label>
      {label}
      <Component {...rest} />
    </label>
  </div>
)
})
export default TextField;