import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Comments({ id }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(comments);
  }, [id]);

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setComment(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = { name, comment, rating };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    setName("");
    setComment("");
    setRating(0);
  };

  const handleDelete = (id) => {
    const updatedComments = [...comments];
    updatedComments.splice(id, 1);
    setComments(updatedComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <StyledCommentsContainer>
      <StyledCommentsHeadline>Comments & Rating</StyledCommentsHeadline>
      <StyledForm onSubmit={handleSubmit}>
        <StyledNameInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
        ></StyledNameInput>
        <StyledRatingBox>
          <input
            type="radio"
            name="rating"
            value="1"
            onClick={handleRating}
            checked={rating === 1}
          />
          1
          <input
            type="radio"
            name="rating"
            value="2"
            onClick={handleRating}
            checked={rating === 2}
          />
          2
          <input
            type="radio"
            name="rating"
            value="3"
            onClick={handleRating}
            checked={rating === 3}
          />
          3
          <input
            type="radio"
            name="rating"
            value="4"
            onClick={handleRating}
            checked={rating === 4}
          />
          4
          <input
            type="radio"
            name="rating"
            value="5"
            onClick={handleRating}
            checked={rating === 5}
          />
          5
        </StyledRatingBox>
        <StyledSendButton type="submit">Send</StyledSendButton>
        <StyledCommentInput
          type="text"
          placeholder="Comment"
          name="comment"
          value={comment}
          onChange={handleChange}
        ></StyledCommentInput>
      </StyledForm>

      <StyledComments>
        {comments.map((comment, id) => (
          <div key={id}>
            <StyledCommentName>from: {comment.name}</StyledCommentName>
            <StyledCommentText>"{comment.comment}"</StyledCommentText>
            <p>Rating: {comment.rating}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        ))}
      </StyledComments>
    </StyledCommentsContainer>
  );
}

const StyledCommentsHeadline = styled.h2`
  text-align: center;
  font-size: 30px;
`;

const StyledCommentsContainer = styled.section`
  grid-area: h;
  width: 100%;
  border: 1px solid black;
  justify-self: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledComments = styled.div`
  min-height: 50px;
  max-height: 500px;
  overflow-y: scroll;
  margin-bottom: 40px;
  border: 1px red solid;
  width: 70%;
  align-self: center;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
`;

const StyledCommentText = styled.p`
  font-style: italic;
`;

const StyledCommentName = styled.h4`
  border-bottom: 1px black solid;
`;

const StyledForm = styled.form`
  display: grid;
  flex-direction: column;
  grid-template-areas:
    "a b c"
    "d d d";
  grid-template-columns: 40% 30% 30%;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledNameInput = styled.input`
  grid-area: a;
  border-radius: 10px;
`;

const StyledCommentInput = styled.input`
  grid-area: d;
  border-radius: 10px;
  line-height: 30px;
  margin-right: 20px;
`;

const StyledSendButton = styled.button`
  grid-area: c;
  align-self: end;
  margin-right: 20px;
  border-radius: 5px;
  box-shadow: inset 0px 1px 0px 0px #a6827e;
  background: linear-gradient(to bottom, #7d5d3b 5%, #634b30 100%);
  background-color: #7d5d3b;
  border-radius: 20px;
  border: 1px solid #54381e;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 13px;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #4d3534;
  margin-bottom: 5px;
  :hover {
    background: linear-gradient(to bottom, #634b30 5%, #7d5d3b 100%);
    background-color: #634b30;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

const StyledRatingBox = styled.div`
  border: 1px green solid;
  grid-area: b;
`;
