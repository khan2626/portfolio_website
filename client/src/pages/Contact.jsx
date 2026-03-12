// import React from "react";
// import SectionTitle from "../components/SectionTitle";

// export default function Contact() {
//     const contactInfo = [
//         { label: "Name", value: "Israel Ukanyohe Agi", icon: "ri-user-line" },
//         { label: "Email", value: "israelkhan217@gmail.com", icon: "ri-mail-line", href: "mailto:israelkhan217@gmail.com" },
//         { label: "Phone", value: "+234 810 036 1511", icon: "ri-phone-line", href: "tel:+2348100361511" },
//         { label: "Location", value: "Nigeria", icon: "ri-map-pin-line" },
//     ];

//     return (
//         <section id="contact" className="py-6 sm:py-4">
//             <SectionTitle title="Get in Touch" />
//             <div className="flex sm:flex-col gap-8 sm:gap-6 items-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
//                 {contactInfo.map((item) => {
//                         const content = (
//                             <>
//                                 <i className={`${item.icon} text-tertiary text-xl flex-shrink-0`}></i> {/* 1. Prevent icon from shrinking */}
//                                 <div className="min-w-0 flex-1"> {/* 2. Allow this container to shrink below its content size */}
//                                     <p className="text-muted text-sm">{item.label}</p>
//                                     <p className="text-white font-medium break-all sm:break-words"> {/* 3. Use break-all for ultra-tight screens */}
//                                         {item.value}
//                                     </p>
//                                 </div>
//                             </>
//                         );
//                         return (
//                             <div
//                                 key={item.label}
//                                 className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-tertiary/30 transition-all"
//                             >
//                                 {item.href ? (
//                                     <a href={item.href} className="flex gap-4 w-full hover:text-tertiary transition-colors">
//                                         {content}
//                                     </a>
//                                 ) : (
//                                     <div className="flex gap-4">{content}</div>
//                                 )}
//                             </div>
//                         );
//                     })}
//                 </div>
//                 <div className="flex-1 max-w-md">
//                     <div className="rounded-xl overflow-hidden border border-white/10">
//                         <img
//                             src="https://cdn.pixabay.com/photo/2019/02/13/09/59/contact-3994013_1280.jpg"
//                             alt="Contact"
//                             className="h-[180px] sm:h-[200px] w-full object-cover"
//                         />
//                     </div>
//                     <p className="text-muted text-center mt-4 text-sm">
//                         Open to opportunities and collaborations
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";
import SectionTitle from "../components/SectionTitle";

export default function Contact() {
  const contactInfo = [
    { label: "Name", value: "Israel Ukanyohe Agi", icon: "ri-user-line" },
    {
      label: "Email",
      value: "israelkhan217@gmail.com",
      icon: "ri-mail-line",
      href: "mailto:israelkhan217@gmail.com",
    },
    {
      label: "Phone",
      value: "+234 810 036 1511",
      icon: "ri-phone-line",
      href: "tel:+2348100361511",
    },
    { label: "Location", value: "Nigeria", icon: "ri-map-pin-line" },
  ];

  return (
    <section id="contact" className="py-6 sm:py-4">
      <SectionTitle title="Get in Touch" />
      <div className="flex sm:flex-col gap-8 sm:gap-6 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-2xl">
          {contactInfo.map((item) => {
            const content = (
              <>
                <i
                  className={`${item.icon} text-tertiary text-xl flex-shrink-0`}
                ></i>{" "}
                {/* 1. Prevent icon from shrinking */}
                <div className="min-w-0 flex-1">
                  {" "}
                  {/* 2. Allow this container to shrink below its content size */}
                  <p className="text-muted text-sm">{item.label}</p>
                  <p className="text-white font-medium break-all sm:break-words">
                    {" "}
                    {/* 3. Use break-all for ultra-tight screens */}
                    {item.value}
                  </p>
                </div>
              </>
            );
            return (
              <div
                key={item.label}
                className="flex gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-tertiary/30 transition-all"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="flex gap-4 w-full hover:text-tertiary transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex gap-4">{content}</div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex-1 max-w-md">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <img
              src="https://cdn.pixabay.com/photo/2019/02/13/09/59/contact-3994013_1280.jpg"
              alt="Contact"
              className="h-[180px] sm:h-[200px] w-full object-cover"
            />
          </div>
          <p className="text-muted text-center mt-4 text-sm">
            Open to opportunities and collaborations
          </p>
        </div>
      </div>
    </section>
  );
}
