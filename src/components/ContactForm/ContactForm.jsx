import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";
export default function ContactForm() {

  let [name, setName] = useState("Aditya")
  let [email, setEmail] = useState("adityababukesharwani2@gmail.com")
  let [text, setText] = useState("Keep Coding!!")


  
  let onsubmit = (event) =>{
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    
    console.log({
      name,
      email,
      text
    })
  }


  return ( 
  <div className={styles.container}>
  <div className={styles.contact_form}>
  <div className={styles.top_btn}>
    <Button text="VIA SUPPORT CHAT" icon={ <MdMessage fontSize="24px"/>}/>
    <Button text="VIA CALL" icon={ <FaPhone fontSize="24px"/>}/>
  </div>
  <Button
  isOutline={true}
   text="VIA Email Form" icon={ <HiMail fontSize="24px"/>}/>
   <form onSubmit={onsubmit}>
    <div className={styles.form_control}>
    <label htmlFor="name">Name</label>
    <input type="text" name="name"/>
    </div>
    <div className={styles.form_control}>
    <label htmlFor="email">E-Mail</label>
    <input type="email" name="email"/>
    </div>
    <div className={styles.form_control}>
    <label htmlFor="text">TEXT</label>
    <textarea name="text" rows={10}/>
    </div>
    <div style={{display:"flex", 
      justifyContent: 'end'}}>
    <Button text="SUBMIT BUTTON"/>
    </div>
    <div>
    {name + " " + email + " " + text}

    </div>
    
   </form>
    </div>
    <div className={styles.contact_image}>
      <img src="/images/contact.svg" alt="Contact"/>
    </div>
   </div>
  );
}
