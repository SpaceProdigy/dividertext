export const DummyText = () => {
  return (
    <>
      <p className="styledP">
        {` Welcome to the 'Text Divider' page! Here, you can quickly and easily
          split your text into equal parts to make it more readable or
          manageable. Simply enter your text, specify the desired number of
          parts, and our tool will automatically divide it into the required
          number of segments. This is the perfect solution for breaking down
          long texts into more manageable portions, whether they're articles,
          notes, or even code scripts. Try it now and simplify your text work!`}
      </p>
    </>
  );
};

export const DummyLink = () => {
  return (
    <>
      <ul className="styledUl">
        <li className="styledLi">
          <a href="#publishing" className="styledLink">
            Publishing Articles and Blogs 🔗
          </a>
        </li>
        <li>
          <a href="#presentations" className="styledLink">
            Text Preparation for Presentations 🔗
          </a>
        </li>
        <li>
          <a href="#code" className="styledLink">
            Code Editing 🔗
          </a>
        </li>
        <li>
          <a href="#learning" className="styledLink">
            Learning and Education 🔗
          </a>
        </li>
      </ul>
      ;
    </>
  );
};
