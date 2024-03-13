import Link from "next/link";

const Footer = () => {

  const footerLinks = [
      {
        name : "Quick Links",
        links: [
          {
            name: "Our Story",
            url: "/ourstory"
          },
          {
            name: "About Us",
            url: "/aboutus"
          },
          {
            name: "Careers",
            url: "/careers"
          },
          {
            name: "Blogs",
            url: "/blogs"
          }
        ]
      } , 

      {
        name : "Feature Details",
        links: [
          {
            name: "Recommendation System",
            url: "/recommendationsystem"
          },
          {
            name: "Scalability",
            url: "/scalability"
          },
          {
            name: "Secure",
            url: "/scure"
          },
        ]
      } ,

      {
          name: "Socail Media",
          links: [
            {
              name: "Facebook",
              url: "/facebook"
            },
            {
              name: "Instagram",
              url: "/instagram"
            },
            {
              name: "Twitter",
              url: "/twitter"
            },
            {
              name: "LinkedIn",
              url: "/linkedin"
            }
          ]
      },

      {
        name : "contact Us",
        links: [
          {
            name: "giftshop@gmail.com",
            url: "/email"
          },
          {
            name: "+127-372-8282",
            url: "/phone"
          },
          {
            name: "Address: 1234 Main St, New York, NY 10001, USA",
            url: "/address"
          },
        ]
      }

  ]
  

  return (

    <div>

    <footer className="font-sans bg-slate-800 py-8 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {
          footerLinks.map((link, index) => {
            return (
              <div key={index}>
                <h4 className="text-slate-200 font-bold text-lg mb-5">{link.name}</h4>
                <ul className="space-y-4">
                  {
                    link.links.map((item, index) => {
                      return (
                        <li key={index}>

                          <Link href={item.url} 
                                className="hover:text-slate-200 text-slate-400 text-[15px] 
                                           font-semibold transition-all"
                          >{item.name}</Link>

                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            )
          })
        }
      </div>
        

      <div className="border-t text-center border-slate-200 pt-8 mt-8 flex justify-between">
        <p className="text-slate-200 text-[15px] font-semibold">The Gift Shop</p>
        <p className="text-slate-200 text-[15px] font-semibold">
          Copyright © 2024
          All Rights Reserved.
        </p>
      </div>

    </footer>
    
    </div>
  )
};

export default Footer;
