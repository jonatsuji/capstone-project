import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import STAR_FILLED from "../../public/images/star_filled.png";

export default function Comments({ currentRouteID }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [rating, setRating] = useState(0);

  async function performFetch() {
    const allComments = await getComments();
    setComments(allComments);
  }

  useEffect(() => {
    performFetch();
  }, []);

  //----GET

  async function getComments() {
    try {
      const response = await fetch(`/api/comments`);
      const data = await response.json();
      const routeComments = data.filter((comment) => {
        return comment.routeID === currentRouteID;
      });
      return routeComments;
    } catch (error) {
      console.error(error);
    }
  }

  //--------

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else {
      setComment(event.target.value);
    }
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

  //----POST

  async function handleSubmit(event, currentRouteID) {
    event.preventDefault();
    const form = event.target.elements;
    const newName = form.name.value;
    const newComment = form.comment.value;
    const newRating = rating;

    const newPost = {
      name: newName,
      comment: newComment,
      rating: newRating,
      routeID: currentRouteID,
    };

    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    });

    performFetch();

    setName("");
    setComment("");
    setRating(0);
  }

  //-----DELETE

  async function handleDelete(id) {
    await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    performFetch();
  }

  //-----

  return (
    <StyledCommentsContainer>
      <StyledCommentsHeadline>Comments & Rating</StyledCommentsHeadline>
      <StyledForm onSubmit={(event) => handleSubmit(event, currentRouteID)}>
        <StyledNameInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <StyledRatingBox>
          Rating:<br></br>
          <img src="" />
          <input
            type="radio"
            name="rating"
            value="1"
            checked={rating === 1}
            onChange={handleRating}
          />
          1
          <input
            type="radio"
            name="rating"
            value="2"
            checked={rating === 2}
            onChange={handleRating}
          />
          2
          <input
            type="radio"
            name="rating"
            value="3"
            checked={rating === 3}
            onChange={handleRating}
          />
          3
          <input
            type="radio"
            name="rating"
            value="4"
            checked={rating === 4}
            onChange={handleRating}
          />
          4
          <input
            type="radio"
            name="rating"
            value="5"
            checked={rating === 5}
            onChange={handleRating}
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
          required
        />
      </StyledForm>
      {comments && comments.length ? (
        <StyledComments>
          {comments.map((comment) => (
            <div key={comment._id}>
              <StyledCommentName>from: {comment.name}</StyledCommentName>
              <StyledCommentText>"{comment.comment}"</StyledCommentText>
              <p>
                Rating: {comment.rating}{" "}
                <Image src={STAR_FILLED} alt="star" width={15} height={15} />
              </p>
              <button onClick={() => handleDelete(comment._id)}>Delete</button>
            </div>
          ))}
        </StyledComments>
      ) : (
        <StyledComments>
          <StyledPlaceholderComments>
            Be the first, to write down your opinion!
          </StyledPlaceholderComments>
        </StyledComments>
      )}
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
  max-width: 800px;
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
  border: 1px black solid;
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
    "d d d"
    "e e e";
  grid-template-columns: 40% 20% 40%;
  gap: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledNameInput = styled.input`
  grid-area: a;
  line-height: 30px;
  border-radius: 10px;
  border: 1px black solid;
  :focus {
    outline: 2px blue solid;
  }
`;

const StyledCommentInput = styled.input`
  grid-area: d;
  border-radius: 10px;
  line-height: 40px;
  margin-right: 20px;
  border: 1px black solid;
  :focus {
    outline: 2px blue solid;
  }
`;

const StyledSendButton = styled.button`
  grid-area: e;
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
  grid-area: c;
  margin-right: 30px;
`;

const StyledPlaceholderComments = styled.p`
  font-style: italic;
  text-align: center;
`;
