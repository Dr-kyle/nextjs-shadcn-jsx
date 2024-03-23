import prisma from "@/lib/db";
async function Page() {


  const res = await prisma.User.findMany()
  console.log(res)

  return ( <div>
    {res.length}
  </div> );
}

export default Page;