"use client"

import { useDispatch, useSelector} from 'react-redux';
import Button from '@app/UI components/Button';
import Container from '@app/UI components/Container';
import Card from '@app/UI components/Card';
import { getAllUsers } from '@utils/apiUsers';
import { useQuery} from '@node_modules/@tanstack/react-query';
import LoadingSpinner from '@app/UI components/LoadingSpinner';
import UsersTableModel from './UsersTableModel';
import toast from '@node_modules/react-hot-toast/dist';
import { setOverlay } from '@app/UI components/Overlay/reduxSlice/overlayReducer';
import FormModel from './UserFormModel';
import { IoArrowRedoOutline } from '@node_modules/react-icons/io5';

const Page = () => {
  let showForm = useSelector((store)=> store.overlay.overlay);

  //Now lets use the React Query to fetch data from supabase
    const {isLoading, data, error} =  useQuery({
      queryKey: ['allUsers'],
      queryFn: getAllUsers
    });

    //functionality of displaying form field
    let dispatch = useDispatch();
    function handleCreate(){
      dispatch(setOverlay({overlay: true, fetchedFormData: false}));
    } 

   //If isLoading = then display the Spinner
   if(isLoading){
     return  <LoadingSpinner/>
   }
 
  return (
    <>
    { showForm && <FormModel></FormModel>}
    <Container width={"100%"}>
      <div className="headerText"> Users </div><div className="miniHeaderText">Company Users</div>
    </Container>

    <Container height={"78.5vh"} width={"100%"} boxShadow={"5px 3px 45px rgb(2, 37, 58)"} 
    style={{overflow:"auto"}} >

      <Card padding={"5px"} width={"100%"} justifyContent={"flex-end"}>
        <Button boxShadow={"-5px 3px 25px rgb(2, 37, 58)"} 
        actionHandler={handleCreate} gap='8px'>
         <IoArrowRedoOutline/><div style={{fontSize:"13px"}}>Create employee</div>
        </Button>
      </Card>
      
      <Card width={"100%"} boxShadow={"5px 3px 25px rgb(2, 97, 170)"} >
        <div style={{height: "60vh", width: "100%", overflow: "auto", padding: "0px"}}>
          <section style={{height: "auto", width: "100%",}}>
          { /* Print data here */ }
            {
              data ? <UsersTableModel data={data}/> : <LoadingSpinner/>
            }
          </section>
        </div>
      </Card>

    </Container>
    </>
  );
};

export default Page;
