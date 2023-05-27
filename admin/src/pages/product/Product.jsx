import { Link, useLocation } from "react-router-dom";
import "./product.css";
// import Chart from "../../components/chart/Chart";
//import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
// import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { privateRequest, publicRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from "../../redux/productRedux"
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import swal from "sweetalert";

// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";
//import app from "../../firebase";


export default function Product() {
  //para tomar los datos de la barra
  const location = useLocation();
  //seleccionamos la segunda parte el ID
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [product, setProduct] = useState({})
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [progres, setProgres] = useState("")

  console.log("🚀 ~ file: Product.jsx:35 ~ Product ~ inputs:", inputs)
  const dispatch = useDispatch();
  /*
  //encontramos los datos de nuestro producto por su ID
  // const product = useSelector((state) =>
  //   state.product.products.find((product) => product._id === productId)
  // );
*/
  useEffect(()=>{
    const getProduct = async()=>{
        dispatch(getProductStart())
        try {
          const res = await publicRequest.get(`/products/${productId}`)
          console.log("🚀 ~ file: apiCalls.js:56 ~ getProduct ~ res:", res)
          setProduct(res.data)
          dispatch(getProductSuccess())
        } catch (error) {
          console.log("🚀 ~ file: apiCalls.js:62 ~ getProduct ~ error:", error)
          dispatch(getProductFailure())
        }
      }
      getProduct()
  },[productId, dispatch])
  // console.log("🚀 ~ file: Product.jsx:31 ~ Product ~ product:", product)

  const{_id, title, desc, inStock, img, price} = product

   

  const MONTHS = useMemo(
    () => [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    []
  );

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };


  const handleClick =  () => {
    updateProduct(productId, {...inputs}, dispatch)
  }

  
useEffect(() => {
    const getStats = async () => {
      try {
        const res = await privateRequest.get("orders/income?pid=" + productId);
        // console.log("🚀 ~ file: Product.jsx:109 ~ getStats ~ res:", res.data)
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  
  const handleClickImg = (e) => {
    e.preventDefault()
   if (file === null) {
     swal("Lo siento!", "debes dar click en el icono upload y seleccionar una foto!🥴", "error");
     return;
   }

   // ====================CARGAR LA IMAGEN LOCAL AL FIRABASE=======================
   const fileName = new Date().getTime() + file.name;
   // console.log("🚀 ~ file: Register.jsx:24 ~ handleClick ~ fileName:", fileName)
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
         // ====================CARGAR LA IMAGEN LOCAL AL FIRABASE=======================
          updateProduct(productId, { img: downloadURL }, dispatch);
       });
     }
   );
 };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Editar</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Nuevo</button>
        </Link>
      </div>
      <div className="productTop">
        {/* <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Ventas" />
        </div> */}
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{_id}</span>
            </div>
            {/* <div className="productInfoItem">
              <span className="productInfoKey">ventas:</span>
              <span className="productInfoValue">5123</span>
            </div> */}
            <div className="productInfoItem">
              <span className="productInfoKey">en stock:</span>
              <span className="productInfoValue">{inStock?.toString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nombre del producto</label>
            <input
              name="title" 
              type="text" 
              placeholder={title} 
              onChange={handleChange}
              />
            <label> Descripcion</label>
            <input 
              name="desc"
              type="text" 
              placeholder={desc} 
              onChange={handleChange}
            />
            <label>Precio</label>
            <input 
              name="price"
              type="text" 
              placeholder={price} 
              onChange={handleChange}
            />
            <label>En Stock</label>
            <select name="inStock" id="idStock" onClick={handleChange}>
              <option value="true">SI</option>
              <option value="false">NO</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={img} alt="" className="productUploadImg" />
              <label for="file">
                <Publish className="productUpdateIcon"/>
              </label>
              <input 
                type="file" 
                id="file" 
                style={{ display: "none" }} 
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="productUpdateBtns">
                  <button className="btn" onClick={handleClick}>
                    Datos
                  </button>
                  <button className="btn" onClick={handleClickImg}>
                    Imagen
                  </button>
                  <span>{progres}</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
