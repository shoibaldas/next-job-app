'use client';
import Banner from '@/components/Banner';
import BreadCrumbs from '@/components/BreadCrumbs';
import usePageTitle from '@/components/hooks/usePageTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Heading } from '@/components/ui/Typography';
import Button from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Bage';

const SvgIcon = ({ svg }) => (
  <div dangerouslySetInnerHTML={{ __html: svg }} />
);

const About = () => {
  usePageTitle("About");

  const valueData = [
    {
      title: "Trusted Partnerships ",
      description: "Collaborating with a commitment to security and quality, we forge enduring partnerships that prioritize your success and peace of mind.",
      icon: `<svg width="78" height="76" viewBox="0 0 78 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M62.0252 6.77105L67.1241 22.2295L61.7686 23.9959C60.0385 24.5665 58.3258 24.4407 56.6985 23.6206L39.5125 14.9597C37.6119 14.0018 36.8464 11.6769 37.8037 9.77645C38.7606 7.87706 41.0871 7.10964 42.9863 8.06699L51.9547 12.5875C52.0273 12.6241 52.106 12.6416 52.1871 12.6416C52.3813 12.6416 52.5602 12.5323 52.6479 12.3582C52.6784 12.2978 52.6967 12.2319 52.7017 12.1644C52.7067 12.0968 52.6983 12.029 52.677 11.9647C52.6556 11.9005 52.6219 11.8411 52.5775 11.7899C52.5332 11.7387 52.4792 11.6968 52.4186 11.6666L43.4502 7.14608C41.1634 5.99348 38.3597 6.80869 37.0516 9.00903L36.986 9.11955L21.7372 14.1495C19.7161 14.8162 17.5293 13.7136 16.8632 11.6925C16.1968 9.6711 17.2987 7.48519 19.3199 6.81848L38.9187 0.354435C39.8961 0.0321688 40.9425 0.115184 41.8536 0.574778C41.8684 0.581825 41.8832 0.5887 41.8878 0.591106L58.4614 7.80831C58.5781 7.85913 58.7094 7.86543 58.8304 7.82602L62.0252 6.77105ZM0.979492 55.1204L7.31842 74.3394L15.6657 71.5867L9.32678 52.3659L0.979492 55.1204ZM15.8632 36.7385C15.7425 36.0756 16.12 35.4336 16.7597 35.2202C18.2007 34.7392 19.2859 33.5157 19.5874 32.0264C19.8883 30.5386 19.3662 28.9869 18.2275 27.9834C17.7222 27.538 17.6216 26.8045 17.99 26.2402C18.7511 25.0726 19.6775 24.0215 20.7403 23.1198C20.9864 22.9093 21.3005 22.7952 21.6243 22.7986C21.9481 22.802 22.2597 22.9227 22.5013 23.1384C23.639 24.1461 25.2419 24.474 26.6831 23.9912C28.1242 23.5086 29.2038 22.279 29.5029 20.7897C29.5659 20.472 29.7417 20.1878 29.9978 19.9895C30.254 19.7912 30.5732 19.6923 30.8966 19.711C32.2884 19.7894 33.6615 20.0687 34.9733 20.5405C35.2776 20.6496 35.5323 20.8648 35.6907 21.1466C35.8492 21.4283 35.9007 21.7578 35.8359 22.0745C35.5334 23.5612 36.0518 25.1139 37.1896 26.1182C38.329 27.1238 39.9314 27.4452 41.3712 26.9595C41.6779 26.8552 42.012 26.8656 42.3116 26.9888C42.6113 27.112 42.8561 27.3396 43.0007 27.6295C43.6278 28.8724 44.0731 30.1989 44.3228 31.5685C44.3824 31.8869 44.3245 32.2161 44.1598 32.4951C43.9951 32.774 43.7347 32.9837 43.4271 33.0853C41.9856 33.5662 40.9001 34.7912 40.5986 36.2808C40.2975 37.7689 40.8215 39.3192 41.9609 40.3223C42.4664 40.7672 42.5638 41.5044 42.1962 42.0678C41.4352 43.2351 40.5091 44.2859 39.4467 45.1875C39.2005 45.3983 38.8862 45.5125 38.5621 45.5091C38.2381 45.5056 37.9263 45.3847 37.6846 45.1688C36.547 44.1599 34.9449 43.8321 33.5032 44.316C32.0629 44.7994 30.9829 46.0282 30.684 47.5175C30.6209 47.8353 30.445 48.1196 30.1887 48.3178C29.9324 48.5161 29.613 48.6149 29.2896 48.5962C27.8981 48.5172 26.5254 48.2376 25.2139 47.766C24.9094 47.6573 24.6544 47.4423 24.4957 47.1606C24.3371 46.8789 24.2854 46.5494 24.3502 46.2327C24.6534 44.7443 24.1348 43.1945 22.9963 42.189C22.4347 41.6941 21.7527 41.3556 21.0189 41.2077C20.285 41.0598 19.5252 41.1076 18.8157 41.3463C18.5091 41.4511 18.1749 41.4411 17.8751 41.3182C17.5753 41.1953 17.3303 40.9679 17.1854 40.678C16.5585 39.4349 16.1132 38.1082 15.8632 36.7385ZM24.7722 35.94C25.2489 37.3609 26.2506 38.5119 27.593 39.1788C28.3692 39.5645 29.2198 39.7705 30.0869 39.7705C30.6964 39.7705 31.3008 39.6691 31.8785 39.4753C34.8133 38.4911 36.3992 35.3016 35.4145 32.3674C34.4298 29.4326 31.2421 27.8474 28.3073 28.8321C25.3729 29.8166 23.7877 33.0054 24.7722 35.94ZM63.3887 44.8512C63.0795 45.6757 62.6521 46.4508 62.1198 47.1522C62.0209 47.2837 61.8778 47.3748 61.7169 47.4087C61.556 47.4427 61.3882 47.4171 61.2447 47.3368C60.3317 46.8305 59.2072 46.8482 58.3126 47.387C57.8722 47.6536 57.5095 48.0313 57.261 48.4822C57.0125 48.933 56.8869 49.4413 56.8967 49.956C56.9014 50.1207 56.846 50.2815 56.7407 50.4083C56.6354 50.535 56.4874 50.6189 56.3246 50.6444C55.4563 50.7864 54.572 50.8019 53.6993 50.6905C53.5357 50.671 53.3848 50.5927 53.2747 50.4701C53.1647 50.3475 53.103 50.189 53.1013 50.0243C53.0819 48.9808 52.5046 48.0185 51.591 47.5132C51.1577 47.2741 50.6709 47.1487 50.176 47.1488C49.6416 47.1488 49.1178 47.2947 48.6601 47.5704C48.5198 47.6564 48.3531 47.6884 48.191 47.6606C48.0289 47.6327 47.8825 47.5468 47.779 47.419C47.2225 46.7383 46.7666 45.9813 46.4253 45.171C46.2909 44.8529 46.4064 44.4969 46.7026 44.3192C47.143 44.0536 47.5059 43.677 47.755 43.227C48.0041 42.7771 48.1307 42.2696 48.1221 41.7554C48.1027 40.7126 47.521 39.7511 46.6086 39.2467C46.3095 39.0813 46.177 38.729 46.298 38.4084C46.6082 37.5843 47.0361 36.8094 47.5683 36.1079C47.667 35.9767 47.8098 35.8858 47.9704 35.852C48.1311 35.8183 48.2985 35.8439 48.4416 35.9242C49.3553 36.4302 50.4792 36.4109 51.374 35.8717C52.2674 35.3334 52.8126 34.3484 52.7907 33.3051C52.7858 33.1404 52.8412 32.9795 52.9465 32.8527C53.0518 32.726 53.1997 32.642 53.3626 32.6166C54.2295 32.4757 55.1157 32.4592 55.9871 32.5698C56.1506 32.5892 56.3015 32.6674 56.4116 32.7899C56.5217 32.9124 56.5834 33.0708 56.5852 33.2355C56.6039 34.2788 57.1809 35.2427 58.0951 35.747C59.0078 36.2504 60.1327 36.2296 61.0251 35.6902C61.1655 35.6039 61.3326 35.5717 61.4951 35.5997C61.6575 35.6277 61.8042 35.714 61.9077 35.8423C62.4639 36.5236 62.9202 37.2806 63.2629 38.0906C63.3966 38.4083 63.2789 38.7642 62.9836 38.9412C62.089 39.4778 61.5448 40.4623 61.5643 41.5051C61.5748 42.0193 61.7202 42.5217 61.9859 42.962C62.2515 43.4024 62.6282 43.7652 63.0781 44.0143C63.2223 44.0928 63.3331 44.2207 63.3902 44.3746C63.4473 44.5284 63.4468 44.6977 63.3887 44.8512ZM58.0977 39.6697C57.0204 37.8834 54.6709 37.299 52.8837 38.3758C51.0969 39.4524 50.5125 41.8035 51.5891 43.5906C52.1132 44.4605 52.944 45.0713 53.9291 45.3168C54.8819 45.5559 55.8905 45.4146 56.7409 44.9227L56.8032 44.8852C57.6734 44.3605 58.2864 43.5305 58.531 42.5441C58.7751 41.5589 58.6218 40.5388 58.0977 39.6697ZM70.6833 1.66154L62.3351 4.41344L68.6749 23.6342L77.0206 20.8798L70.6833 1.66154ZM56.2643 61.8517L41.0171 66.8816L40.9515 66.9921C40.0699 68.4747 38.4639 69.3777 36.7441 69.3777C35.982 69.3776 35.2306 69.1983 34.5505 68.8544L25.582 64.3356C25.4599 64.274 25.3673 64.1664 25.3245 64.0364C25.2817 63.9065 25.2923 63.7649 25.354 63.6428C25.4156 63.5207 25.5232 63.428 25.6531 63.3853C25.7831 63.3425 25.9247 63.3531 26.0468 63.4147L35.0144 67.9335C36.915 68.8912 39.2391 68.1241 40.1976 66.2242C40.6615 65.3046 40.7342 64.2576 40.4111 63.28C40.0883 62.3041 39.4066 61.5054 38.4883 61.0425L21.303 52.3798C19.6755 51.5595 17.9633 51.4348 16.2329 52.0055L10.8757 53.7718L15.9763 69.2296L19.1709 68.1746C19.2918 68.1355 19.4229 68.1421 19.5393 68.1932L36.1137 75.4097C36.1212 75.4133 36.1338 75.4197 36.1481 75.4262C37.0647 75.8868 38.1079 75.9678 39.0828 75.6464L58.6814 69.1816C60.7021 68.5151 61.8044 66.3295 61.1384 64.3085C60.4722 62.2874 58.2852 61.185 56.2643 61.8517Z" fill="#2563EB"/>
</svg>
`

    },
    {
      title: "Collaborative Teamwork",
      description: "Driving collective progress through collaboration, we work together to achieve shared goals and deliver outstanding results.",
      icon: `<svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.6518 85.5391H61.3482V76.7465C61.3482 70.1824 57.2421 64.5311 51.4719 62.2335C46.5922 66.3728 39.4078 66.3728 34.5281 62.2335C28.7577 64.5311 24.6518 70.1824 24.6518 76.7465V85.5391ZM43 42.1288C48.7678 42.1288 53.4433 46.747 53.4433 52.444C53.4433 58.141 48.7678 62.7593 43 62.7593C37.2322 62.7593 32.5567 58.141 32.5567 52.444C32.5567 46.747 37.2322 42.1288 43 42.1288ZM69.8005 39.8775C75.0351 39.8775 79.2787 44.0691 79.2787 49.2394C79.2787 54.4098 75.0351 58.6013 69.8005 58.6013C64.5658 58.6013 60.3223 54.4098 60.3223 49.2394C60.3223 44.0691 64.5657 39.8775 69.8005 39.8775ZM16.1995 39.8775C21.4342 39.8775 25.6777 44.0691 25.6777 49.2394C25.6777 54.4098 21.4343 58.6013 16.1995 58.6013C10.9647 58.6013 6.72131 54.4098 6.72131 49.2394C6.72148 44.0691 10.9649 39.8775 16.1995 39.8775ZM43 25.8232C44.6392 25.8232 45.9679 24.4944 45.9679 22.855C45.9679 21.2159 44.6392 19.8871 43 19.8871C41.3608 19.8871 40.0319 21.2159 40.0319 22.855C40.0319 24.4944 41.3608 25.8232 43 25.8232ZM41.7109 36.4679C35.1883 35.8577 29.9977 30.6671 29.3875 24.1445H26.5454C26.2035 24.1445 25.8756 24.0086 25.6339 23.7669C25.3921 23.5251 25.2563 23.1973 25.2563 22.8554C25.2563 22.5135 25.3921 22.1856 25.6339 21.9439C25.8756 21.7021 26.2035 21.5663 26.5454 21.5663H29.3875C29.9977 15.0437 35.1885 9.85305 41.7109 9.24289V6.40042C41.7109 6.05854 41.8467 5.73066 42.0885 5.48892C42.3302 5.24717 42.6581 5.11136 43 5.11136C43.3419 5.11136 43.6698 5.24717 43.9115 5.48892C44.1533 5.73066 44.2891 6.05854 44.2891 6.40042V9.24272C50.8117 9.8527 56.0025 15.0435 56.6127 21.5662H59.4548C59.7967 21.5662 60.1246 21.702 60.3663 21.9437C60.6081 22.1855 60.7439 22.5133 60.7439 22.8552C60.7439 23.1971 60.6081 23.525 60.3663 23.7667C60.1246 24.0085 59.7967 24.1443 59.4548 24.1443H56.6127C56.0027 30.6669 50.8119 35.8577 44.2892 36.4679C44.2892 36.9565 44.326 39.3085 44.2538 39.6108C47.2366 39.8936 50.0315 41.1931 52.17 43.2915C59.9656 39.7882 65.3945 31.956 65.3945 22.8552C65.3943 10.4873 55.368 0.460938 43 0.460938C30.632 0.460938 20.6057 10.4873 20.6057 22.8552C20.6057 31.9558 26.0346 39.7882 33.8301 43.2915C35.9687 41.1931 38.7636 39.8936 41.7463 39.6108C41.6742 39.3083 41.7109 36.9564 41.7109 36.4679ZM54.0205 24.1443C53.4306 29.2419 49.3865 33.286 44.2891 33.8758V31.1681C44.2891 30.8262 44.1533 30.4984 43.9115 30.2566C43.6698 30.0149 43.3419 29.8791 43 29.8791C42.6581 29.8791 42.3302 30.0149 42.0885 30.2566C41.8467 30.4984 41.7109 30.8262 41.7109 31.1681V33.8758C36.6135 33.2861 32.5692 29.2419 31.9795 24.1445H34.6873C35.0291 24.1445 35.357 24.0086 35.5988 23.7669C35.8405 23.5251 35.9763 23.1973 35.9763 22.8554C35.9763 22.5135 35.8405 22.1856 35.5988 21.9439C35.357 21.7021 35.0291 21.5663 34.6873 21.5663H31.9795C32.5694 16.4689 36.6135 12.4248 41.7109 11.8349V14.5427C41.7109 14.8845 41.8467 15.2124 42.0885 15.4542C42.3302 15.6959 42.6581 15.8317 43 15.8317C43.3419 15.8317 43.6698 15.6959 43.9115 15.4542C44.1533 15.2124 44.2891 14.8845 44.2891 14.5427V11.8348C49.3867 12.4246 53.4306 16.4685 54.0205 21.5662H51.3127C50.9709 21.5662 50.643 21.702 50.4012 21.9437C50.1595 22.1855 50.0237 22.5133 50.0237 22.8552C50.0237 23.1971 50.1595 23.525 50.4012 23.7667C50.643 24.0085 50.9709 24.1443 51.3127 24.1443H54.0205ZM63.9263 78.1417V76.7465C63.9263 70.9307 61.1641 65.7332 56.8865 62.3985C58.2362 60.6658 60.001 59.2702 62.0276 58.3644C66.5214 62.1185 73.0788 62.1187 77.5728 58.3646C82.2549 60.4565 85.5391 65.1628 85.5391 70.5995V78.1417H63.9263ZM0.460938 78.1417V70.5995C0.460938 65.1628 3.74513 60.4565 8.42717 58.3646C12.9212 62.1185 19.4786 62.1185 23.9724 58.3644C25.9992 59.2702 27.7638 60.6657 29.1135 62.3985C24.8359 65.7332 22.0737 70.9309 22.0737 76.7465V78.1417H0.460938Z" fill="#2563EB"/>
</svg>
`,
    },
    {
      title: "Excellence You Can Rely On",
      description: "With a focus on trusted quality, we provide reliable solutions that meet the highest standards and earn your confidence.",
      icon: `<svg width="78" height="88" viewBox="0 0 78 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.9074 67.5761L42.3894 83.698C41.9993 86.1902 39.8852 88 37.3638 88H13.5505V63.3325L21.4138 54.4655V43.4844H21.6837C25.6712 43.4844 28.9144 46.7277 28.9144 50.7152V61.7031H39.8818C41.3702 61.7031 42.7796 62.3528 43.7472 63.4837C44.2252 64.0413 44.5765 64.696 44.7768 65.4025C44.9771 66.109 45.0217 66.8506 44.9074 67.5761ZM0.701172 64.7728H8.39429V88H0.701172V64.7728Z" fill="#2563EB"/>
<path d="M69.3055 8.36171C63.2349 8.39918 57.6594 5.09781 54.4469 0H49.7358C46.5145 5.09403 40.9477 8.4009 34.8738 8.36171H26.8799V39.4711C31.2079 41.4789 34.0783 45.8461 34.0711 50.7151C34.0706 51.9193 34.0715 55.3875 34.0711 56.5468H39.8822C44.1313 56.496 48.1549 59.3479 49.533 63.3548H49.5347C50.1062 64.9524 50.2683 66.6868 50.0039 68.3718L49.875 69.1917L52.0888 70.2143L68.2038 62.7739C73.7295 60.2215 77.2994 54.6407 77.2994 48.5547V8.36171H69.3055ZM44.1757 22.4022L48.9142 27.1408L60.0036 16.0514L63.6491 19.6986L48.9142 34.4334L40.5302 26.0476L44.1757 22.4022ZM41.7093 50.2167V45.0604H62.47V50.2167H41.7093Z" fill="#2563EB"/>
</svg>
`
    },
  ];

  const teamMembers = [
    {
      name: "Nasir Uddin",
      designation: "Chief Executive Officer",
      image: "/persons/nasir.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/nasiru/" },
      department: "Leadership"
    },
    {
      name: "Mohammad S Jabr",
      designation: "Chief Technology Officer",
      image: "/persons/sahr.jpg",
      socials: { linkedin: "#" },
      department: "Leadership"
    },
    {
      name: "Mouad EL Jamil",
      designation: "Chief Technology Officer",
      image: "/persons/avatar.png",
      socials: { linkedin: "https://www.linkedin.com/in/mouadeljamil/" },
      department: "Leadership"
    },
    {
      name: "Ikhlas Taleb",
      designation: "Functional Designer and Analyst",
      image: "/persons/iklas.jpg",
      socials: { linkedin: "#" },
      department: "Design"
    },
    {
      name: "Taufiqul Wahab",
      designation: "Project Manager",
      image: "/persons/wahab.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/mdtaufiqulwahab/" },
      department: "Management"
    },
    {
      name: "Shoibal Das",
      designation: "Software Engineer Lead",
      image: "/persons/shoibal.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/shoibaldas/" },
      department: "Engineer"
    },
    {
      name: "Nahid Amin",
      designation: "Software Engineer",
      image: "/persons/nahid.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/nahid-amin-283950220/" },
      department: "Engineer"
    },
    {
      name: "Shihab Shahin",
      designation: "UI/UX Designer",
      image: "/persons/avatar.png",
      socials: { linkedin: "https://www.linkedin.com/in/hasinshihab/" },
      department: "Design"
    },
    {
      name: "Nazmus Shakib",
      designation: "Product Marketing | Worldwide",
      image: "/persons/sakib2.jpg",
      socials: { linkedin: "https://www.linkedin.com/in/md-nazmus-sakib-864659125/" },
      department: "Marketing"
    },
    {
      name: "Nazmun Rumi",
      designation: "Marketing Head | Asia Pacific",
      image: "/persons/rumi.jpeg",
      socials: { linkedin: "https://www.linkedin.com/in/nazmun-nahar-a74065254/" },
      department: "HR"
    }
  ];

  return (
    <div className='min-h-screen'>
      <div className='relative'>
        <Banner customTitle="About ICEL TECH LLC" ></Banner>
        <div className="absolute top-32 md:top-36 lg:top-36 xl:top-52 px-6 md:px-10 lg:px-10 xl:px-20">
          <BreadCrumbs></BreadCrumbs>
        </div>
      </div>
      {/* Vision Section */}
      <section className="px-6 md:px-12 lg:px-32 py-16 bg-white">
        {/* 1st */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Our Vision */}
            <div className="bg-[#1A46A7] text-white p-6 rounded-xl shadow-xl">
              <div className="bg-gray-50 w-28 h-10 py-1 rounded-lg ">
                <div className='flex items-center justify-center mt-1'>
                  <h6 className="text-base text-[#1A46A7]">Our Mission</h6>
                </div>
              </div>
              <div className='mt-4'>
                <p className='text-gray-50'>
                  At ICEL TECH LLC, our mission is to simplify technology through secure, innovative, and tailored IT solutions. We aim to empower businesses by delivering reliable services in cybersecurity, software development, digital marketing, and project management.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="bg-[#1A46A7] w-28 h-10 py-1 rounded-lg ">
                <div className='flex items-center justify-center mt-1'>
                  <h6 className="text-base text-gray-50">Our Mission</h6>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  We envision becoming a globally trusted technology partner known for excellence, innovation, and security. Through a client-centric approach and a passion for progress, we strive to build a smarter and safer digital future for businesses worldwide.
                </p>
              </div>
            </div>
            {/* Our History */}
            <div className="bg-white p-6 rounded-xl shadow-xl">
              <div className="bg-[#1A46A7] w-28 h-10 py-1 rounded-lg ">
                <div className='flex items-center justify-center mt-1'>
                  <h6 className="text-base text-gray-50">Our History</h6>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  ICEL TECH LLC was founded with the vision of providing secure and innovative IT solutions to businesses of all sizes. What began as a small team of tech enthusiasts has grown into a trusted name in the industry.
                </p>
              </div>
            </div>

          </div>
          {/* Right Side */}
          <div className="relative bg-transparent min-h-[610px] w-full rounded-xl overflow-hidden">
            <Image
              src="/about/mission.png"
              alt="Our Story"
              fill
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col px-10 py-10">
              <Heading
                level={4}
                color="text-gray-50"
                fontFamily="akira"
                className="uppercase mb-4 text-lg md:text-4xl"
              >
                Innovating with Purpose, Securing with Trust, Delivering with Excellence
              </Heading>
              <p className="text-gray-200 text-sm">
                We shape the future of business by delivering innovative and tailored technology solutions. Building trust through transparency and reliability is at the core of everything we do. Our commitment to excellence ensures quality and security in every project. Together, we empower organizations to navigate today&apos;s challenges and seize tomorrow&apos;s opportunities.
              </p>
              <div className='mt-10'>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="md"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                  // asChild
                  >
                    Get Connected
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Value Section */}
      <section className="px-6 md:px-12 lg:px-32 py-16 bg-white">
        <Heading
          level={3}
          color="text-[#2563EB]"
          fontFamily="akira"
          className="text-3xl md:text-4xl lg:text-5xl text-left"
        >
          Our Core Values
        </Heading>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-start mt-12">
          {/* Left Side */}
          <div className="w-full lg:w-7/12 relative bg-transparent min-h-[450px] rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A46A7 0%, #0A1B41 100%)" }}>
            <Image
              src="/about/value.png"
              alt="Our Story"
              fill
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black bg-opacity-10">
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-5/12 relative bg-transparent min-h-[450px] rounded-xl overflow-hidden" style={{ background: "linear-gradient(180deg, #1A46A7 0%, #0A1B41 100%)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-10 py-10">
              <Heading
                level={4}
                color="text-gray-50"
                fontFamily="akira"
                className="uppercase text-xl md:text-2xl lg:3xl xl:text-4xl tracking-wider text-center max-w-lg"
              >
                Drive More Impact with
              </Heading>
              <Heading
                level={4}
                fontFamily="akira"
                className="uppercase text-xl md:text-2xl lg:3xl xl:text-4xl outline-text-white tracking-wider text-center"
              >
                Our Support
              </Heading>
              <div className="mt-4">
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="md"
                    icon={<FiArrowRight />}
                    iconPosition="right"
                  >
                    Explore Our Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          {/* Icon/Image */}
          {valueData.map((value, index) => (
            <div key={index} className="bg-[#E9EFFD] rounded-xl shadow-xl overflow-hidden p-4 md:p-6 min-h-[250px]">
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mb-8">
                <div className="flex items-start justify-start">
                  <SvgIcon svg={value.icon} />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                {/* Header and Text */}
                <div className="text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">{value.title}</h3>
                  <p className="text-sm md:text-base text-gray-500">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
      <div className="flex flex-col items-center justify-center bg-lightBackground text-lightText mb-12">
        <section className="w-full px-6 md:px-12 lg:px-32 py-16 bg-white">
          {/* Header Section */}
          <Heading
            level={3}
            color="text-[#2563EB]"
            fontFamily="akira"
            className="text-3xl md:text-4xl lg:text-5xl text-left"
          >
            Our Team
          </Heading>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 items-start mt-10">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-52 md:h-64 lg:h-72 xl:h-80 object-cover transition-transform duration-300 group-hover:scale-105 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-md font-semibold text-gray-800 mb-1">
                          {member.name}
                        </p>
                        <p className="text-sm">
                          {member.designation}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200">
                        {member.department}
                      </Badge>
                    </div>
                    <div className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 transition-all duration-300 opacity-0 group-hover:right-4 group-hover:opacity-100">
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full shadow-md hover:bg-yellow-500 hover:outline-yellow-500 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
                    {/* Decorative Element */}
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </section>
      </div>

      <section className="relative bg-transparent min-h-[500px] w-full overflow-hidden mb-44 flex justify-center items-center">
        <Image
          src="/about/connect.png"
          alt="Our Story"
          fill
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center px-10 py-10 text-center">
          <Heading
            level={3}
            color="text-gray-50"
            fontFamily="akira"
            className="uppercase mb-4 text-2xl md:text-4xl text-center"
          >
            Ready To Grow Your Business?
          </Heading>
          <p className="text-gray-200 text-sm">
            Join the thousands of creators who have transformed their ideas into wearable art and memorable gifts. Our intuitive design tools make it effortless and fun
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <Button
                variant="secondary"
                size="md"
                icon={<FiArrowRight />}
                iconPosition="right"
              >
                Get Connected
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;