import React from "react";
import { Link } from "react-router-dom";

function DetailsPage() {
  return (
    <div className="grid-cols col-span-4">
      <div>
        <div className="flex">
          <h1 className="text-5xl text-gray-200 font-semibold w-full mb-12">
            Html
          </h1>
          <button className="btn btn-primary border-red-600 hover:border-red-700 outline-red-600 bg-red-600 hover:bg-red-700">
            Download Pdf
          </button>
        </div>

        <img
          className="w-full rounded-lg mb-12"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcYuZypw0R-VvOCkaT2-vqbYpdPaMP6oanug&usqp=CAU"
          alt=""
        />
        <p>
          HTML is used to create web pages. This article will teach you the
          basics of HTML. I also created a 45-minute video course on the
          freeCodeCamp.org YouTube channel that teaches you HTML in the context
          of creating an actual web page. If you are just learning HTML, I
          recommend both reading this article and watching the video course.
          HTML stands for Hyper Text Markup Language. Every website on the
          internet uses HTML & CSS. Most also use JavaScript. In a website, HTML
          is the structure, CSS is the style, and JavaScript is the
          functionality. Here is a great interactive diagram from
          codeanalagies.com. Move the slider back and forth.You can actually see
          the HTML that makes up any element on a webpage by right-clicking an
          element and then selecting "Inspect". HTML tags mark the beginning and
          end of an element (and are considered part of the element). Tags are
          containers. They tell you something about the content between the
          opening & closing tags. In the element above, the tags are (opening
          tag) and (closing tag). You will notice that the closing tag has a /.
          This particular tag is a paragraph tag. It specifies a paragraph in
          the HTML document. The words between the opening and closing tags are
          a paragraph. Elements can be either container elements (they hold
          content) or stand-alone elements, sometimes called self-closing
          elements. Paragraph elements are containers: Hi, I contain content
          Image elements are stand-alone: Notice in the stand-alone img element,
          there is no closing tag but there is a / before the final angle
          bracket. Some things to note about attributes: Attributes are
          positioned inside the opening tag, before the right bracket.
          Attributes are paired with values (in this example, the value is
          info). Key / value pairs are an important concept in programming.
          Attributes are selected from a pre-defined set of possible attributes
          depending on the element. Values are assigned to attributes and they
          must be contained inside quotation marks. HTML elements 'nest' inside
          of one another. The element that opens first closes last. When nesting
          elements, spaces and tabs are often used to show the level of nesting.
          However, the spacing is not required and is only used to make HTML
          easier to read for humans. Here is an example of some HTML with a few
          levels of nesting elements:
        </p>
        <div className="mt-12 space-x-4 text-center">
          <Link to={``} className="btn btn-primary">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
