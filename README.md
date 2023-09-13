# Coding Challenge

This repository contains the source code for a responsive single-page web application created using the Next.js frontend framework. The primary goal of this project is to transform and enhance the provided 'index.html' as the basis for the application while addressing any deficiencies. The aim is to create a visually appealing user interface within a reasonable timeframe.

## Key Tasks

1. **Application Development**

   * Create a responsive single-page application using Next.js.
   * Utilize 'index.html' as the starting point for development.

   > **Note:** The original 'index.html' may have deficiencies that need to be addressed during development.
   >

   * Focus on optimizing the visual appearance of the application.
2. **Sectors Selectbox**

   * Implement a "Sectors" select box within the application.
   * Populate the database with all the entries from the "Sectors" select box.
   * Dynamically compose the "Sectors" select box using data retrieved from the database.
3. **User Data Handling**

   * After the user clicks the "Save" button, perform the following activities:
     * Validate all input data, ensuring that all fields are mandatory.
     * Store user input data in the database, including Name, Sectors, and Agree to terms.
     * Refill the form with the stored data, enabling users to edit their own data during the session.
4. **View Linkage**

   * Create links between two views within the application.
   * Ensure that both views are responsive, providing a seamless user experience.

## Libraries Used

The project relies on the following libraries, as specified in the 'package.json' file:

<pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>json</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon-sm" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-json">{
  "dependencies": {
    "@headlessui/react": "^1.7.17",
    "@heroicons/react": "^2.0.18",
    "autoprefixer": "10.4.15",
    "clsx": "^2.0.0",
    "eslint": "8.49.0",
    "eslint-config-next": "13.4.19",
    "mongodb": "^6.0.0",
    "mongoose": "^7.5.1",
    "next": "13.4.19",
    "next-navigation": "^1.0.6",
    "postcss": "8.4.29",
    "react": "18.2.0",
    "react-dom": "18.2.0",
 "sweetalert2": "^11.7.27",
    "tailwindcss": "3.3.3"
  }
}
</code></div></div></pre>

Please feel free to explore this repository to gain insights into the development of a modern and user-friendly web application.
