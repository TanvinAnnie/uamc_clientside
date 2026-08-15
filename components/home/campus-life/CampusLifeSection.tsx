"use client";


import {
  useEffect,
  useState,
} from "react";


import CampusLifeCard, {

  type CampusLifeCardData,

} from "./CampusLifeCard";


import CampusLifeLoading from "./CampusLifeLoading";








export default function CampusLifeSection(){



const [

loading,

setLoading

]=useState<boolean>(true);





const [

campusLife,

setCampusLife

]=useState<CampusLifeCardData[]>([]);








const fetchCampusLife = async()=>{


try{


setLoading(true);





const response = await fetch(

"/api/campus-life",

{

cache:"no-store",

}

);







const result = await response.json();








if(

!response.ok ||

!result.success

){


throw new Error(

result.message ||

"Failed to fetch Campus Life"

);


}







const items:CampusLifeCardData[] =

Array.isArray(result.data)

?

result.data

:

[];







const activeItems = items.filter(

(item)=>


item.isActive === true


);







setCampusLife(activeItems);





}

catch(error){



console.error(

"Campus Life Fetch Error:",

error

);



setCampusLife([]);





}

finally{


setLoading(false);


}



};









useEffect(() => {

  void (async () => {

    try {

      setLoading(true);

      const response = await fetch("/api/campus-life", { cache: "no-store" });

      const result = await response.json();

      if (!response.ok || !result.success) {

        throw new Error(result.message || "Failed to fetch Campus Life");

      }

      const items: CampusLifeCardData[] = Array.isArray(result.data) ? result.data : [];

      const activeItems = items.filter((item) => item.isActive === true);

      setCampusLife(activeItems);

    } catch (error) {

      console.error("Campus Life Fetch Error:", error);

      setCampusLife([]);

    } finally {

      setLoading(false);

    }

  })();

}, []);












// =========================
// LOADING
// =========================


if(loading){


return (

<section

className="
bg-[#008B45]
px-6
py-20
"

>


<div

className="
mx-auto
max-w-7xl
"

>


<CampusLifeLoading />


</div>


</section>


);


}












// =========================
// MAIN SECTION
// =========================


return (


<section

className="
bg-[#008B45]
px-6
py-20
"

>


<div

className="
mx-auto
max-w-7xl
"

>





{/* HEADER */}


<div

className="
mx-auto
max-w-3xl
text-center
text-white
"

>



<p

className="
text-sm
font-semibold
uppercase
tracking-[0.25em]
text-emerald-100
"

>

Campus

</p>






<h2

className="
mt-3
text-4xl
font-bold
sm:text-5xl
"

>

Life

</h2>







<p

className="
mt-5
text-base
leading-7
text-emerald-50
"

>

Building a vibrant community of creative
and accomplished people from around
the world.

</p>





</div>









{/* CONTENT */}


{

campusLife.length === 0 ?



(


<div

className="
mt-14
rounded-3xl
border
border-white/20
bg-white/10
px-6
py-20
text-center
text-white
"

>


<p

className="
text-lg
font-semibold
"

>

No Campus Life available

</p>


<p

className="
mt-2
text-sm
text-emerald-100
"

>

Campus life cards will appear here.

</p>



</div>


)

:



(



<div

className="
mt-14
grid
grid-cols-1
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>


{

campusLife.map((item)=>(


<CampusLifeCard

key={item._id}

data={item}

/>


))

}



</div>



)



}







</div>


</section>


);


}