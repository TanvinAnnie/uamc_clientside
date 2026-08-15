"use client";


import {
  ArrowRight,
} from "lucide-react";





export interface CampusLifeCardData {


_id:string;


title:string;


shortDescription:string;


image:string;


buttonText:string;


buttonLink:string;


isActive:boolean;


}




interface Props {


data:CampusLifeCardData;


}







export default function CampusLifeCard({

data,

}:Props){



return (


<div

className="
group
overflow-hidden
rounded-3xl
bg-white
shadow-lg
transition
duration-500
hover:-translate-y-2
hover:shadow-2xl
"

>





{/* IMAGE */}


<div

className="
h-64
overflow-hidden
"

>


{

data.image

?

<img

src={data.image}

alt={data.title}

className="
h-full
w-full
object-cover
transition
duration-700
group-hover:scale-110
"

/>


:

<div

className="
flex
h-full
items-center
justify-center
bg-slate-100
text-sm
text-slate-400
"

>

No Image

</div>

}



</div>










{/* CONTENT */}


<div

className="
p-6
"

>



<h3

className="
text-xl
font-bold
text-slate-800
"

>

{data.title}

</h3>






<p

className="
mt-3
line-clamp-3
text-sm
leading-6
text-slate-500
"

>

{data.shortDescription}

</p>







<a

href={data.buttonLink || "#"}

className="
mt-6
inline-flex
items-center
gap-2
rounded-xl
bg-[#008B45]
px-5
py-3
text-sm
font-semibold
text-white
transition
hover:bg-[#00763B]
"

>





{

data.buttonText ||

"Learn More"

}




<ArrowRight

size={17}

/>



</a>






</div>







</div>



);


}