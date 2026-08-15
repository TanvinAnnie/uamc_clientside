"use client";


export default function CampusLifeLoading(){

return (

<div

className="
grid
grid-cols-1
gap-6
md:grid-cols-3
animate-pulse
"

>


{
[1,2,3].map((item)=>(

<div

key={item}

className="
h-[350px]
rounded-2xl
bg-green-900/20
"

>


</div>

))

}


</div>


);

}