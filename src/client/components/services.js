import React from 'react';
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();

    const navigateIndependent = () => {
        navigate('/serviceOne');
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const navigateCommunity = () => {
        navigate('/communitySupport');
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const navigateCommunityNursing = () => {
        navigate('/communityNursing');
        window.scrollTo(0, 0); // Scroll to the top of the page
    };


    const navigateGroupBased = () => {
        navigate('/groupBasedActivities');
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    const ServicesList = () =>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-2 mt-4 md:mt-4">
    <div className="h-[800px] md:h-[730px] p-6 bg-[#f2faeb] rounded-md flex items-center justify-center">
                    <div className="container">
                        <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                            <div className="flex justify-center items-center elementor-icon">
                                    <img
                                        src="images/communitysupport.jpg"
                                        alt="Image"
                                        className="w-auto mt-20 mb-5 rounded-[20px] md:ml-2 w-[300px] h-[250px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-4 font-bold">Community Support</h3>
                        <p className="max-w-lg text-xl font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                            It is evident that community support plays a crucial role in enriching the lives of individuals
                            regardless of disabilities. Engaging in social and recreational activities positively impacts individuals’
                            quality of life. This not only uplifts mood but also fosters personal 
                        </p>
                        <button onClick={navigateCommunity} className="flex justify-center items-center mx-10 mb-20 md:mx-24 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                            Find out more
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                </div>
    {/* <div className="h-96 p-4 bg-stone-300  rounded-md flex items-center justify-center">
        <div className="container">
            <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                        <svg className="w-24 h-24 text-slate-50 ml-2 mt-20 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path d="m1099.2 204.86c-26.809-44.773-70.566-76.676-123.18-89.832-58.289-14.574-122.47-4.4297-176.13 27.812-0.011719 0.007812-0.023438 0.007812-0.035156 0.011719l-199.78 119.92-199.98-119.97c-0.13672-0.082032-0.29297-0.078125-0.42969-0.15234-51.172-30.629-110.26-41.184-166.46-29.727-56.809 11.594-103.86 44.234-132.52 91.93-45.266 75.512-38.523 164.71 17.832 233.02 2.6211 3.0273 5.1094 6.0469 7.4219 9.3711 1.8242 2.5586 3.8164 5.4414 5.1445 7.375 0.39062 0.5625 0.76562 1.0781 1.1094 1.5469l101.25 182.31c9.3828 17.02 27.066 26.641 45.328 26.641 8.5117 0 17.148-2.0898 25.125-6.4805 9.6953-5.4258 17.801-13.27 23.469-22.703 11.645-19.562 12.004-43.902 1-63.395l-30.914-55.926 119.67 71.828v173.98l-31.859-55.211c-11.254-19.594-32.32-31.754-54.98-31.754-11.188 0-21.809 2.7695-31.824 8.3828-24.727 14.547-33.125 46.332-18.773 70.754l104.22 180.64 4.4961 10.215c1.7109 3.707 3.125 7.5586 4.4766 11.211 29.344 83.211 102.28 134.91 190.34 134.91 114.25 0 207.2-100.91 207.2-224.96v-282.7l112.05-67.18-30.871 55.68c-11.125 19.719-10.742 44.086 0.98047 63.551 5.8125 9.6875 13.98 17.559 23.43 22.66 7.8438 4.3906 16.48 6.6211 25.219 6.6211 4.7578 0 9.5625-0.66797 14.266-2.0156 13.27-3.793 24.309-12.574 31.113-24.734 33.488-60.332 96.625-174.05 101.2-182.21 0.92188-1.3555 3.707-5.4414 6.207-8.9453 2.3711-3.3477 4.7461-6.4141 7.6016-9.7305 56.129-68.066 62.875-157.25 17.598-232.76zm-833.39 258.83c-5.6562-3.3867-12.879-2.543-17.602 2.0156-4.7383 4.582-5.8047 11.77-2.6016 17.531l57.355 103.49c6.0469 10.699 5.8164 23.527-0.57422 34.27-3.0742 5.1289-7.3516 9.25-12.625 12.191-10.98 6.0664-24.836 2.1445-30.871-8.8086l-101.55-182.84c-0.32031-0.58203-0.67578-1.1367-1.0742-1.6641l-1.2305-1.7773c-1.4062-2.0391-3.5078-5.0781-5.3203-7.6133-2.7695-4-5.8945-7.8281-8.9805-11.387-48.797-59.168-54.441-133.66-15.102-199.27 24.395-40.613 64.656-68.449 113.38-78.391 49.215-10.016 101.09-0.66797 146.07 26.363 0.097656 0.058594 0.21094 0.054688 0.3125 0.10938l207.23 124.32c0.20313 0.12109 0.39453 0.25 0.60156 0.36328l67.941 40.758c6.5352 3.9219 11.152 10.129 12.984 17.496 1.8477 7.3789 0.71094 15.047-3.2109 21.574-8.0977 13.469-25.629 17.832-39.086 9.7734l-136.18-81.691c-6.8984-4.1328-15.836-1.9102-19.961 4.9883-4.1328 6.8906-1.8984 15.828 4.9883 19.961l135.98 81.574c0.089844 0.054687 0.13672 0.14844 0.22656 0.20312l44.043 26.363c2.8711 1.7578 5.0977 3.8125 7.1875 6.4023-5.0273-1.9805-10.336-3.4688-16.051-4.0508v-0.027343c-0.65234-0.09375-1.2539-0.0625-1.8633-0.10938-0.070312 0-0.125-0.039063-0.19531-0.039063-0.039063 0-0.070313 0.019531-0.10547 0.019531-0.98047-0.0625-1.9609-0.17578-3.0195-0.17578-10.445 0-20.266 2.793-28.758 7.6133-0.44141-12.41-4.5781-23.977-11.605-32.582-1.6484-2.4648-3.5938-4.7031-5.1016-5.9688-10.883-10.883-25.316-16.879-40.652-16.879-19.008 0-36.188 9.1445-46.781 24.004l-62.531-37.492c-6.8633-4.1289-15.805-1.918-19.969 4.9648-4.1406 6.8828-1.918 15.82 4.9648 19.969l67.219 40.305c-0.13672 1.3203-0.26172 2.6445-0.30469 3.957-9.793-5.6367-21.035-8.5156-32.562-7.707-17.363 1.043-33.137 10.504-42.984 24.781l-20.762-12.457c-6.9062-4.1406-15.828-1.9102-19.961 4.9883-4.1328 6.8906-1.9023 15.828 4.9883 19.961l25.535 15.324c-0.24609 2.2031-0.51562 4.4023-0.51562 6.6211v59.496zm317.4 598.79c-76.5 0-137.4-43.176-162.97-115.7-1.6914-4.5625-3.3867-9.1211-5.3633-13.398l-3.0273-6.8633c-1.2773-2.9414-1.9961-4.5898-2.7617-5.8516l-104.26-180.72c-6.2852-10.684-2.5273-24.605 8.1133-30.871 16.047-8.9648 37.969-3.2539 47.105 12.66l59.023 102.31c3.2891 5.7109 10.043 8.5391 16.359 6.793 6.3633-1.7031 10.789-7.457 10.789-14.051l0.003906-321.77c0-3.1758 0.49609-6.3438 1.5352-9.5703 3.5938-11.648 13.566-19.926 24.977-20.613 8.3398-0.64062 16.262 2.3281 22.184 8.2539 1.3086 1.3086 2.4805 2.8477 3.3867 4.1211 3.1914 4.6758 4.9453 10.336 4.9453 15.941v210.42c0 8.043 6.5156 14.547 14.547 14.547 8.0352 0 14.547-6.5078 14.547-14.547v-258.23c0-2.7773 0.46875-5.7031 1.3516-8.7031 3.7227-11.805 14.613-19.734 27.094-19.734 9.6875 0 16.266 4.5469 20.082 8.3555 0.22656 0.22656 1.9961 2.3789 2.2383 2.5938 4 4.9531 6.1172 11.004 6.1172 17.488v258.23c0 8.043 6.5156 13.922 14.547 13.922 8.043 0 14.547-7.1328 14.547-15.172v-209.17c0-2.3672 0.21484-4.207 0.87891-6.5586 2.9141-12.68 14.562-21.879 27.703-21.879l2.2148 0.11328c6.707 0.49609 13.055 3.4258 17.902 8.2695 0.66797 0.67578 1.3516 1.4219 2.5586 3.082 1.2227 1.5 2.2578 3.2031 3.2539 5.4062 1.6484 3.4961 2.5156 7.4961 2.5156 11.566v210.42c0 8.043 6.5078 14.547 14.547 14.547 8.043 0 14.547-6.5078 14.547-14.547l0.003907-158.71c0-5.0312 1.2773-9.9023 3.707-14.156 4.9023-8.6094 14.008-14.145 24.734-14.434 7.6562 0 14.848 2.9688 20.23 8.3555 0.37109 0.375 0.65234 0.76562 1.3633 1.625 4.4766 5.1133 6.832 11.543 6.832 18.613v321.77c0.003906 108-79.898 195.86-178.1 195.86zm476.16-643.62c-3.2695 3.7773-6.207 7.5586-9.0938 11.645-3.2109 4.4961-6.9062 9.9648-6.9062 9.9648l0.17188 0.10547c-4.0898 6.7266-20.473 36.234-102.36 183.77-3.0117 5.3828-7.8711 9.2617-13.711 10.941-5.8125 1.6758-11.949 0.9375-17.445-2.1445-5.0586-2.7266-9.375-6.918-12.516-12.148-6.3359-10.527-6.5508-23.656-0.51172-34.352l57.297-103.25c3.1953-5.7539 2.1328-12.941-2.6016-17.523-4.7305-4.5742-11.934-5.3906-17.602-2.0156l-143.68 86.152v-5.1523c0-14.008-4.9883-27.422-13.609-37.273-0.95312-1.1953-1.918-2.3516-3.1133-3.5391-2.2969-2.2969-4.8359-4.2539-7.4258-6.1016l41.438-24.805c6.918-4.0781 9.2188-12.992 5.1445-19.918-4.0508-6.918-12.93-9.2344-19.918-5.1562l-65.996 39.512c-7.9727 0.83594-15.625 3.3086-22.488 7.2383v-1.6602c0-6.1211-1.2852-12.062-3.1523-17.703 1.3516-4.2461 2.3516-8.3711 2.6094-12.195 0.625-6.4492 0.085938-12.781-1.6055-19.086-0.58984-2.3672-1.5664-4.4961-2.4219-6.707l63.543-38.203c6.8906-4.1328 9.1211-13.07 4.9883-19.961-4.1211-6.8828-13.055-9.1211-19.961-4.9883l-65.648 39.465c-2.1406-1.7578-4.2656-3.5234-6.7656-5.0547l-1.3047-0.78125c8.457-4.7344 15.836-11.648 21.168-20.539 7.9141-13.199 10.23-28.676 6.4922-43.59-0.58594-2.3477-1.5469-4.5234-2.4023-6.7461l19.184-11.469c6.9062-4.1289 9.1484-13.055 5.0312-19.953-4.1211-6.8984-13.086-9.1484-19.945-5.0234l-21.371 12.777c-2.1602-1.7617-4.3125-3.5312-6.7461-4.9922l-47.777-28.664 186.46-111.92c0.007813-0.003906 0.011719-0.011718 0.019532-0.015624 47.141-28.305 103.33-37.242 154.14-24.543 45.066 11.266 82.461 38.453 105.29 76.555 39.332 65.617 33.691 140.12-14.895 199.04z"></path></svg>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl mb-5 font-bold">Box Header</h3>
            <p className="max-w-lg text-2xl font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                Simple text added here to text the new changes in the box. Best thing to display
                the content in brief level.
            </p>
            <button className="flex justify-center items-center mx-10 mb-20 md:mx-24 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                Find out more
                <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </button>
        </div>
    </div>
    <div className="h-96 p-4 bg-stone-300  rounded-md flex items-center justify-center">
        <div className="container">
            <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                        <svg className="w-24 h-24 text-slate-50 ml-2 mt-20 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1200"><path d="m1099.2 204.86c-26.809-44.773-70.566-76.676-123.18-89.832-58.289-14.574-122.47-4.4297-176.13 27.812-0.011719 0.007812-0.023438 0.007812-0.035156 0.011719l-199.78 119.92-199.98-119.97c-0.13672-0.082032-0.29297-0.078125-0.42969-0.15234-51.172-30.629-110.26-41.184-166.46-29.727-56.809 11.594-103.86 44.234-132.52 91.93-45.266 75.512-38.523 164.71 17.832 233.02 2.6211 3.0273 5.1094 6.0469 7.4219 9.3711 1.8242 2.5586 3.8164 5.4414 5.1445 7.375 0.39062 0.5625 0.76562 1.0781 1.1094 1.5469l101.25 182.31c9.3828 17.02 27.066 26.641 45.328 26.641 8.5117 0 17.148-2.0898 25.125-6.4805 9.6953-5.4258 17.801-13.27 23.469-22.703 11.645-19.562 12.004-43.902 1-63.395l-30.914-55.926 119.67 71.828v173.98l-31.859-55.211c-11.254-19.594-32.32-31.754-54.98-31.754-11.188 0-21.809 2.7695-31.824 8.3828-24.727 14.547-33.125 46.332-18.773 70.754l104.22 180.64 4.4961 10.215c1.7109 3.707 3.125 7.5586 4.4766 11.211 29.344 83.211 102.28 134.91 190.34 134.91 114.25 0 207.2-100.91 207.2-224.96v-282.7l112.05-67.18-30.871 55.68c-11.125 19.719-10.742 44.086 0.98047 63.551 5.8125 9.6875 13.98 17.559 23.43 22.66 7.8438 4.3906 16.48 6.6211 25.219 6.6211 4.7578 0 9.5625-0.66797 14.266-2.0156 13.27-3.793 24.309-12.574 31.113-24.734 33.488-60.332 96.625-174.05 101.2-182.21 0.92188-1.3555 3.707-5.4414 6.207-8.9453 2.3711-3.3477 4.7461-6.4141 7.6016-9.7305 56.129-68.066 62.875-157.25 17.598-232.76zm-833.39 258.83c-5.6562-3.3867-12.879-2.543-17.602 2.0156-4.7383 4.582-5.8047 11.77-2.6016 17.531l57.355 103.49c6.0469 10.699 5.8164 23.527-0.57422 34.27-3.0742 5.1289-7.3516 9.25-12.625 12.191-10.98 6.0664-24.836 2.1445-30.871-8.8086l-101.55-182.84c-0.32031-0.58203-0.67578-1.1367-1.0742-1.6641l-1.2305-1.7773c-1.4062-2.0391-3.5078-5.0781-5.3203-7.6133-2.7695-4-5.8945-7.8281-8.9805-11.387-48.797-59.168-54.441-133.66-15.102-199.27 24.395-40.613 64.656-68.449 113.38-78.391 49.215-10.016 101.09-0.66797 146.07 26.363 0.097656 0.058594 0.21094 0.054688 0.3125 0.10938l207.23 124.32c0.20313 0.12109 0.39453 0.25 0.60156 0.36328l67.941 40.758c6.5352 3.9219 11.152 10.129 12.984 17.496 1.8477 7.3789 0.71094 15.047-3.2109 21.574-8.0977 13.469-25.629 17.832-39.086 9.7734l-136.18-81.691c-6.8984-4.1328-15.836-1.9102-19.961 4.9883-4.1328 6.8906-1.8984 15.828 4.9883 19.961l135.98 81.574c0.089844 0.054687 0.13672 0.14844 0.22656 0.20312l44.043 26.363c2.8711 1.7578 5.0977 3.8125 7.1875 6.4023-5.0273-1.9805-10.336-3.4688-16.051-4.0508v-0.027343c-0.65234-0.09375-1.2539-0.0625-1.8633-0.10938-0.070312 0-0.125-0.039063-0.19531-0.039063-0.039063 0-0.070313 0.019531-0.10547 0.019531-0.98047-0.0625-1.9609-0.17578-3.0195-0.17578-10.445 0-20.266 2.793-28.758 7.6133-0.44141-12.41-4.5781-23.977-11.605-32.582-1.6484-2.4648-3.5938-4.7031-5.1016-5.9688-10.883-10.883-25.316-16.879-40.652-16.879-19.008 0-36.188 9.1445-46.781 24.004l-62.531-37.492c-6.8633-4.1289-15.805-1.918-19.969 4.9648-4.1406 6.8828-1.918 15.82 4.9648 19.969l67.219 40.305c-0.13672 1.3203-0.26172 2.6445-0.30469 3.957-9.793-5.6367-21.035-8.5156-32.562-7.707-17.363 1.043-33.137 10.504-42.984 24.781l-20.762-12.457c-6.9062-4.1406-15.828-1.9102-19.961 4.9883-4.1328 6.8906-1.9023 15.828 4.9883 19.961l25.535 15.324c-0.24609 2.2031-0.51562 4.4023-0.51562 6.6211v59.496zm317.4 598.79c-76.5 0-137.4-43.176-162.97-115.7-1.6914-4.5625-3.3867-9.1211-5.3633-13.398l-3.0273-6.8633c-1.2773-2.9414-1.9961-4.5898-2.7617-5.8516l-104.26-180.72c-6.2852-10.684-2.5273-24.605 8.1133-30.871 16.047-8.9648 37.969-3.2539 47.105 12.66l59.023 102.31c3.2891 5.7109 10.043 8.5391 16.359 6.793 6.3633-1.7031 10.789-7.457 10.789-14.051l0.003906-321.77c0-3.1758 0.49609-6.3438 1.5352-9.5703 3.5938-11.648 13.566-19.926 24.977-20.613 8.3398-0.64062 16.262 2.3281 22.184 8.2539 1.3086 1.3086 2.4805 2.8477 3.3867 4.1211 3.1914 4.6758 4.9453 10.336 4.9453 15.941v210.42c0 8.043 6.5156 14.547 14.547 14.547 8.0352 0 14.547-6.5078 14.547-14.547v-258.23c0-2.7773 0.46875-5.7031 1.3516-8.7031 3.7227-11.805 14.613-19.734 27.094-19.734 9.6875 0 16.266 4.5469 20.082 8.3555 0.22656 0.22656 1.9961 2.3789 2.2383 2.5938 4 4.9531 6.1172 11.004 6.1172 17.488v258.23c0 8.043 6.5156 13.922 14.547 13.922 8.043 0 14.547-7.1328 14.547-15.172v-209.17c0-2.3672 0.21484-4.207 0.87891-6.5586 2.9141-12.68 14.562-21.879 27.703-21.879l2.2148 0.11328c6.707 0.49609 13.055 3.4258 17.902 8.2695 0.66797 0.67578 1.3516 1.4219 2.5586 3.082 1.2227 1.5 2.2578 3.2031 3.2539 5.4062 1.6484 3.4961 2.5156 7.4961 2.5156 11.566v210.42c0 8.043 6.5078 14.547 14.547 14.547 8.043 0 14.547-6.5078 14.547-14.547l0.003907-158.71c0-5.0312 1.2773-9.9023 3.707-14.156 4.9023-8.6094 14.008-14.145 24.734-14.434 7.6562 0 14.848 2.9688 20.23 8.3555 0.37109 0.375 0.65234 0.76562 1.3633 1.625 4.4766 5.1133 6.832 11.543 6.832 18.613v321.77c0.003906 108-79.898 195.86-178.1 195.86zm476.16-643.62c-3.2695 3.7773-6.207 7.5586-9.0938 11.645-3.2109 4.4961-6.9062 9.9648-6.9062 9.9648l0.17188 0.10547c-4.0898 6.7266-20.473 36.234-102.36 183.77-3.0117 5.3828-7.8711 9.2617-13.711 10.941-5.8125 1.6758-11.949 0.9375-17.445-2.1445-5.0586-2.7266-9.375-6.918-12.516-12.148-6.3359-10.527-6.5508-23.656-0.51172-34.352l57.297-103.25c3.1953-5.7539 2.1328-12.941-2.6016-17.523-4.7305-4.5742-11.934-5.3906-17.602-2.0156l-143.68 86.152v-5.1523c0-14.008-4.9883-27.422-13.609-37.273-0.95312-1.1953-1.918-2.3516-3.1133-3.5391-2.2969-2.2969-4.8359-4.2539-7.4258-6.1016l41.438-24.805c6.918-4.0781 9.2188-12.992 5.1445-19.918-4.0508-6.918-12.93-9.2344-19.918-5.1562l-65.996 39.512c-7.9727 0.83594-15.625 3.3086-22.488 7.2383v-1.6602c0-6.1211-1.2852-12.062-3.1523-17.703 1.3516-4.2461 2.3516-8.3711 2.6094-12.195 0.625-6.4492 0.085938-12.781-1.6055-19.086-0.58984-2.3672-1.5664-4.4961-2.4219-6.707l63.543-38.203c6.8906-4.1328 9.1211-13.07 4.9883-19.961-4.1211-6.8828-13.055-9.1211-19.961-4.9883l-65.648 39.465c-2.1406-1.7578-4.2656-3.5234-6.7656-5.0547l-1.3047-0.78125c8.457-4.7344 15.836-11.648 21.168-20.539 7.9141-13.199 10.23-28.676 6.4922-43.59-0.58594-2.3477-1.5469-4.5234-2.4023-6.7461l19.184-11.469c6.9062-4.1289 9.1484-13.055 5.0312-19.953-4.1211-6.8984-13.086-9.1484-19.945-5.0234l-21.371 12.777c-2.1602-1.7617-4.3125-3.5312-6.7461-4.9922l-47.777-28.664 186.46-111.92c0.007813-0.003906 0.011719-0.011718 0.019532-0.015624 47.141-28.305 103.33-37.242 154.14-24.543 45.066 11.266 82.461 38.453 105.29 76.555 39.332 65.617 33.691 140.12-14.895 199.04z"></path></svg>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl mb-5 font-bold">Box Header</h3>
            <p className="max-w-lg text-2xl font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                Simple text added here to text the new changes in the box. Best thing to display
                the content in brief level.
            </p>
            <button className="flex justify-center items-center mx-10 mb-20 md:mx-24 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                Find out more
                <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </button>
        </div>
    </div> */}
</div>


    return (
        <div className="mt-[-10px] p-2 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
                <div className="relative h-[600px] md:h-[605px] mt-[-30px] md:mt-[0px] p-6 bg-[#f2faeb] rounded-md flex items-center justify-center">
                    <div className="container">
                        <div className="elementor-widget-container transform transition-transform duration-700 ease-in-out hover:scale-110">
                            <div className="elementor-icon-wrapper">
                                <div className="flex justify-center items-center elementor-icon">
                                    <img
                                        src="images/supportIndependentLiving.jpg"
                                        alt="Image"
                                        className="w-auto mt-20 mb-5 rounded-[20px] md:ml-1 w-[300px] h-[250px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-5 font-bold">Supported Independent Living</h3>
                        <p className="max-w-lg text-normal font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                            Supported Independent Living (SIL) is a type of support provided to individuals with disabilities who
                            have higher support needs.
                        </p>
                        <button onClick={navigateIndependent} className="w-full flex justify-center items-center mb-20 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                            Find out more
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h-[600px] md:h-[605px] p-6 bg-[#f2faeb] rounded-md flex items-center justify-center">
                    <div className="container">
                        <div className="elementor-widget-container transform transition-transform duration-700 ease-in-out hover:scale-110">
                            <div className="elementor-icon-wrapper">
                            <div className="flex justify-center items-center elementor-icon">
                                    <img
                                        src="images/communitysupport.jpg"
                                        alt="Image"
                                        className="w-auto mt-[40px] mb-5 rounded-[20px] md:ml-1 w-[300px] h-[255px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-4 font-bold">Community Support</h3>
                        <p className="max-w-lg text-normal font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                            It is evident that community support plays a crucial role in enriching the lives of individuals
                            regardless of disabilities. Engaging in social and recreational activities 
                        </p>
                        <button onClick={navigateCommunity} className="w-full flex justify-center items-center mb-20 my-2 md:mb-10 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                            Find out more
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* #faf3eb */}
                <div className="h-[600px] md:h-[605px] p-6 bg-[#f2faeb] rounded-md flex items-center justify-center">
                    <div className="container">
                        <div className="elementor-widget-container transform transition-transform duration-700 ease-in-out hover:scale-110">
                            <div className="elementor-icon-wrapper">
                            <div className="flex justify-center items-center elementor-icon">
                                    <img
                                        src="images/commNursing5.png"
                                        alt="Image"
                                        className="w-auto mt-20 mb-5 rounded-[20px] md:ml-1 w-[300px] h-[250px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-4 font-bold">Community Nursing</h3>
                        <p className="max-w-lg text-normal font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                            At Jegni Life we offer a wide range of low-intensity nursing support to the individuals who have chronic health
                            conditions, disabilities, or other medical conditions that impact their ability
                        </p>
                        <button onClick={navigateCommunityNursing} className="w-full flex justify-center items-center mb-20 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                            Find out more
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h-[600px] md:h-[605px] p-6 bg-[#f2faeb] rounded-md flex items-center justify-center">
                    <div className="container">
                        <div className="elementor-widget-container transform transition-transform duration-700 ease-in-out hover:scale-110">
                            <div className="elementor-icon-wrapper">
                            <div className="flex justify-center items-center elementor-icon">
                                    <img
                                        src="images/groupbased.png"
                                        alt="Image"
                                        className="w-auto mt-20 mb-5 rounded-[20px] md:ml-1 w-[300px] h-[250px]" />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl mb-4 font-bold">Group Based Activities</h3>
                        <p className="max-w-lg text-normal font-light font-weight: 100 mb-5 font-semi leading-normal text-gray-900 dark:text-white font-sans">
                            Jegni Life aims to provide a platform for individuals to engage in community participation and group
                            activities, with a particular focus on improving social and mental well-being
                        </p>
                        <button onClick={navigateGroupBased} className="w-full flex justify-center items-center mb-20 my-2 md:mb-20 select-none bg-indigo-950 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-full">
                            Find out more
                            <svg className="w-4 h-4 text-slate-50 mx-3 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* <ServicesList/> */}
        </div>
        
    );
};

export default Services;