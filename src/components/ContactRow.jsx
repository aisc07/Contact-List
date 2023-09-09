

export default function ContactRow({contact, setSelectedContactId}){

    return(
        <tr 
        onClick={()=>{
            setSelectedContactId(contact.id);
        }}
        >

            <td className="row">{contact.name}</td>
            <td className="row">{contact.email}</td>
            <td className="row">{contact.phone}</td>
            {/* <td className="row">{contact.website}</td>
            <td className="row">{contact.company.name}</td>    
            <td className="row">{contact.company.street}</td>
            <td className="row">{contact.company.suite}</td> 
            <td className="row">{contact.company.city}</td>  
            <td className="row">{contact.company.zipcode}</td>          */}
        </tr>
    )
}