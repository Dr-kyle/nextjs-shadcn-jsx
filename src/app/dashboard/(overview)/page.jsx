import prisma from "@/lib/db";
function Page() {


  const res = prisma.User.findFirst({
    where: {name: 'kyle'}
  })

  return ( <div>
    {res}
  </div> );
}

export default Page;