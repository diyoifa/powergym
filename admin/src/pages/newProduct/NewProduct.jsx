import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import { Publish } from "@material-ui/icons";



export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [progres, setProgres] = useState("")
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };



  const handleClick = (e) => {
    e.preventDefault();
    if (file === null) {
      swal("Lo siento!", "debes dar click en el icono upload y seleccionar una imagen!🥴", "error");
      return;
    }

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgres(`🔃${progress.toFixed(2)} %🆗✔️ `)
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL};
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nuevo producto</h1>
      <form className="addProductForm">
        <div className="addProductItem-img">
          <label form="file">Imagen</label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }} 
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label for="file">
                <Publish className="productUpdateIcon"/>
          </label>
        </div>
        <div className="addProductItem">
          <label>Titulo</label>
          <input
            name="title"
            type="text"
            placeholder="agrega un titulo"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descripcion</label>
          <input
            name="desc"
            type="text"
            placeholder="descripcion..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Precio</label>
          <input
            name="price"
            type="number"
            placeholder="250000"
            onChange={handleChange}
          />
        </div>
        {/* <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div> */}
        <button onClick={handleClick} className="addProductButton">
          Crear
        </button>
        <span>{progres}</span>
      </form>
    </div>
  );
}
