import React, { useRef, useState } from "react";
import Header from '../../common/Header'
import { sendRequest } from "../../Core/config/request";
import { useNavigate } from "react-router-dom";
import Input  from "../../base/Input";
import Button  from "../../base/Button";
import './CreateBook.css'

const CreateBook = () => {
    const navigate = useNavigate()
	const [data, setData] = useState({
		name: null,
		author: null,
		review: null,
		picture: null,
	});
	const CreateBookHandler = async () => {
		console.log(data);
		try {
			const response = await sendRequest({
				method: "POST",
				route: "/books/create",
				body: data,
			});
			console.log(response);
			navigate("/books")
		} catch (error) {
			console.log(error);
		}
	};

	const handleImageSelect = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = function (event) {
				setData({
					...data, 
					picture: event.target.result,
				});
			};
			reader.readAsDataURL(file);
			
		}
	};

	const imageInput = useRef();
  return (
    <>
        <Header name1="Home" href1= "/index" name2="Add Book" href2="/add" name3="Logout"/>
		<div className="navbar-page light-bg">
			<div className="container white-bg create-book">
				<div className="create-book-container">
					<div className="create-book-column">
						<div className="create-book-input">
							<Input
								label={"Book Name"}
								placeholder={"book"}
								onChange={(name) =>
									setData({
										...data,
										name,
									})
								}
							/>
						</div>
						<div className="create-book-input">
							<Input
								label={"Author Name"}
								placeholder={"author"}
								onChange={(author) =>
									setData({
										...data,
										author,
									})
								}
							/>
						</div>
						<div className="create-book-input">
							<textarea
								name=""
								id=""
								cols="33"
								rows="10"
								label={"Review"}
								placeholder={"review"}
								onChange={(e) =>
									setData({
										...data,
										review: e.target.value,
									})
								}
							/>
						</div>
						<input
							ref={imageInput}
							className="baseInput"
							type="file"
							name="picture"
							id="picture"
							hidden
							onChange={(e) => handleImageSelect(e)}
						/>
						<Button
							textColor={"black-text"}
							text={"Select Image"}
							onClick={() => imageInput.current.click()}
						/>
					</div>
				</div>
				<div className="flex center">
					<Button
						color={"primary-bg"}
						textColor={"white-text"}
						text={"Create Review"}
						onClick={() => CreateBookHandler()}
					/>
				</div>
			</div>
		</div>
    </>
  )
}

export default CreateBook;
