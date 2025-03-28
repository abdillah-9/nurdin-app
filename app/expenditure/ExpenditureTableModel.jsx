"use client"
import TableContainer from "@app/UI components/Table/TableContainer";
import { HiTrash, HiPencil} from "@node_modules/react-icons/hi";
import { setOverlay } from "@app/UI components/Overlay/reduxSlice/overlayReducer";
import { useDispatch} from "@node_modules/react-redux/dist/react-redux";
import { useDeleteFormData } from "./expenditure hooks/useDeleteFormData";

function ExpenditureTableModel({data}){
    console.log(data);

    let dispatch = useDispatch();

    const {loadingDelete, mutateDeleting} = useDeleteFormData();
  
    const handleEditData = (dataRow)=>{
      dispatch(setOverlay({overlay: true, fetchedFormData: dataRow}));
    }

    return(
        <TableContainer styleTable={styleTable}>

            <TableContainer.THead>
            <TableContainer.TR styleTR={styleTR}>
                <TableContainer.TH styleTH={styleTH}>No</TableContainer.TH>
                <TableContainer.TH styleTH={styleTH}>site name</TableContainer.TH>
                <TableContainer.TH styleTH={styleTH}>description</TableContainer.TH>
                <TableContainer.TH styleTH={styleTH}>cost</TableContainer.TH>
                <TableContainer.TH styleTH={styleTH}>date</TableContainer.TH>
                <TableContainer.TH styleTH={styleTH}>actions</TableContainer.TH>
            </TableContainer.TR>
            </TableContainer.THead>

            <TableContainer.TBody>
            { data.map(dataRow=>
            <TableContainer.TR styleTR={styleTR} key={dataRow.id}>
                <TableContainer.TD styleTD={styleTD}> {dataRow.id} </TableContainer.TD>
                <TableContainer.TD styleTD={styleTD}> {dataRow.taskSite} </TableContainer.TD>
                <TableContainer.TD styleTD={styleTD}> {dataRow.description} </TableContainer.TD>
                <TableContainer.TD styleTD={styleTD}> {dataRow.cost} </TableContainer.TD>
                <TableContainer.TD styleTD={styleTD}> {dataRow.date} </TableContainer.TD>
                <TableContainer.TD styleTD={styleTD}>
                    <TableContainer.Icon styleIcon={styleIcon} title={"edit"} iconAction={handleEditData}>
                        <HiPencil onClick={()=>handleEditData(dataRow)}/> 
                    </TableContainer.Icon>
                    <TableContainer.Icon styleIcon={styleIcon} title={"delete"} iconAction={mutateDeleting}>
                        <HiTrash onClick={()=>mutateDeleting(dataRow.id)}/>
                    </TableContainer.Icon>
                </TableContainer.TD>
            </TableContainer.TR>
            )}
            </TableContainer.TBody>

        </TableContainer>
    )
}

//Css f0r above comps
const styleTable={
    width:"100%",
}
const styleTR ={
    fontSize:"14px",
    textAlign: "left",
    display:"flex",
    width:"100%",
}

const styleTH ={
    padding:"5px",
    display:"flex",
    width:"16.667%",
    minWidth:"100px",
    backgroundColor:"rgba(200,200,200,0.5)",
    //border:"1px solid rgba(200,200,200,0.8)",
}

const styleTD ={
    padding:"5px",
    display:"flex",
    gap:"3px",
    width:"16.667%",
    minWidth:"100px",
    //border:"1px solid rgba(200,200,200,0.8)",
}

const styleImage ={
    width:"50px",
    height:"40px",
    borderRadius:"5px",    
}

const styleIcon ={
    height:"fit-content",
    padding:"2px",
    border:"1px solid rgba(200,200,200,1)",
    backgroundColor:"rgba(200,200,200,0.5)",
}

export default ExpenditureTableModel;