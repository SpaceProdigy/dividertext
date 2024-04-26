import presentations from "../pictures/divider/startup.jpg";
import code from "../pictures/divider/web-design.jpg";
import learning from "../pictures/divider/book.jpg";
import publishing from "../pictures/divider/newspapers.jpg";

export const textDividerDescription = {
  title: "Cool description for a page that divides text into parts:",
  description: `<p class="styledP" >Welcome to the 'Text Divider' page! Here, you can quickly and easily split your text into equal parts to make it more readable or manageable.
     Simply enter your text, specify the desired number of parts, and our tool will automatically divide it into the required number of segments.
      This is the perfect solution for breaking down long texts into more manageable portions, whether they're articles, notes, or even code scripts. Try it now and simplify your text work!</p>
             <ul class="styledUl">
            <li class="styledLi"><a href="#publishing" class="styledLink">Publishing Articles and Blogs 🔗</a></li>
            <li><a href="#presentations" class="styledLink">Text Preparation for Presentations 🔗</a></li>
            <li><a href="#code" class="styledLink">Code Editing 🔗</a></li>
            <li><a href="#learning" class="styledLink">Learning and Education 🔗</a></li>
          </ul>
      `,
  whereItCanBeUsed: [
    {
      id: "publishing",
      imageUrl: publishing,
      title: "Publishing Articles and Blogs",
      description:
        "Authors can use this tool to divide lengthy articles into several parts, making them more reader-friendly.",
    },
    {
      id: "presentations",
      title: "Text Preparation for Presentations",
      description:
        "Users can utilize it to prepare textual materials for presentations by breaking text into logical blocks.",
      imageUrl: presentations,
    },
    {
      id: "code",
      title: "Code Editing",
      imageUrl: code,
      description:
        "Developers can use this tool to split large scripts or code into manageable chunks, making them easier for debugging and maintenance.",
    },
    {
      id: "learning",
      title: "Learning and Education",
      imageUrl: learning,
      description:
        "Students and educators can divide educational materials into smaller portions for easier studying and teaching.",
    },
  ],
};
