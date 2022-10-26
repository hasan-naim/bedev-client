import React from "react";

function Blog() {
  return (
    <div>
      <div class="container px-6 lg:px-0">
        <div class="max-w-[900px] mx-auto mt-8">
          <h1 class="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
            #1 What is cors?
          </h1>
          <p class="text-xl text-[#b5c8d6]">
            For security reasons, browsers restrict cross-origin HTTP requests
            initiated from scripts. For example, XMLHttpRequest and the Fetch
            API follow the same-origin policy. This means that a web application
            using those APIs can only request resources from the same origin the
            application was loaded from unless the response from other origins
            includes the right CORS headers.
          </p>
        </div>
        <div class="max-w-[900px] mx-auto mt-16">
          <h1 class="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
            #2 Why are you using firebase? What other options do you have for
            authentication?
          </h1>
          <p class="text-xl text-[#b5c8d6] mb-4">
            We use firebase for authentication purposes, we can also host our
            application in firebase, we can use the real-time databases in
            firebase, and many more. It is a server less service provider. We
            can use google, GitHub, and Facebook for authentication. Also we can
            use database for storing email and password.
          </p>
        </div>
        <div class="max-w-[900px] mx-auto mt-16 mb-24">
          <h1 class="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
            #3 How does the private route work?
          </h1>
          <p class="text-xl text-[#b5c8d6] mb-4">
            A website can have some public routes and also can have some privet
            routes. On the public route, anyone can visit by logging in or
            without logging but on a privet route(protected route) everyone
            cannot visit it. to visit a privet route user has to log in then
            he/she can visit the privet route(privet page). Privet routes are
            protected from a normal user. Only by logging a person can visit the
            privet routes.
          </p>
        </div>
        <div class="max-w-[900px] mx-auto mt-16 mb-24">
          <h1 class="text-3xl mb-4 text-[#69c0ff] font-semibold underline">
            #4 What is Node? How does Node work?
          </h1>
          <p class="text-xl text-[#b5c8d6] mb-4">
            Node is a javascript runtime environment. Node allows developers to
            write JavaScript code that runs directly in a computer process
            itself instead of in a browser. Node can, therefore, be used to
            write server-side applications with access to the operating system,
            file system, and everything else required to build fully-functional
            applications. Node.js is similar in design to, and influenced by,
            systems like Ruby's Event Machine and Python's Twisted. Node.js
            takes the event model a bit further.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
