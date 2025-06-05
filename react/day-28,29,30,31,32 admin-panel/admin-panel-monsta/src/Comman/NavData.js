import { IoColorFill } from "react-icons/io5";
import { SiMaterialformkdocs } from "react-icons/si";


 export const Nav=[
    {
        id:1,
        title:"User",
        // icon: <IoColorFill/>,
        subnMenu:[
          
            { subTitle:"view color"}
            
        ]
    },
    {
        id:2,
        title:"Color",
        // icon: <IoColorFill/>,
        subnMenu:[
            {subTitle:"Add Color", link:"/color/add" },
            { subTitle:"view color" , link:"/color/view"},
            
            
        ]
    },
    {
        id:3,
        title:"Material",
        // icon: <SiMaterialformkdocs/>,
        subnMenu:[
             {subTitle:"Add Material"},
            { subTitle:"view Material"}
        ]
    }
    

]