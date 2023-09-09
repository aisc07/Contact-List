import { useState } from "react"
import { useEffect } from "react"
import ContactRow from "./ContactRow";




export default function SelectedContact({selectedContactId}, {setSelectedContactId}){
    const [contact, setContact] = useState(null);
   
    useEffect(()=>{
        async function fetchSingleContact(){
       
            try{ 
                const response = await fetch(
                    `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
            );
            
            const result = await response.json();
            setContact(result);
            }catch(error){
                console.error(error);
            }
        }
   

        fetchSingleContact()
    },[]);
    console.log("Contacts:", contact)
    return(
        <table>
            <thead>
                <tr> 
                    <th colSpan="3" className="selected-contact">Selected Contact</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="titleRow2">Name</td>
                    <td className="titleRow2">Email</td>
                    <td className="titleRow2">Phone</td>
                    {/* <td className="titleRow2">Website</td>
                    <td className="titleRow2">Company</td>
                    <td className="titleRow2">Street</td>
                    <td className="titleRow2">Suite</td>
                    <td className="titleRow2">City</td>
                    <td className="titleRow2">Zip Code</td> */}
                </tr>
                {
                 contact&&<ContactRow contact={contact}/>
                
                }
                
            </tbody>

        </table>


    );

}
