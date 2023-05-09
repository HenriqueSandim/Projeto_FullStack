import style from "./style.module.css";
import { useContext, useState } from "react";
import CreateAnnouncementModal from "../Modals/CreateAnnouncementModal";
import { Button } from "@mui/material";
import { announcementPage } from "@/context/AnnouncementPageContext";
import EditAnnouncementModal from "../Modals/EditAnnouncementModal";
import { ICar } from "@/interfaces/car";
import CardAnnouncement from "../AnnouncementCarCard";

export default function AnnouncementPage() {
 const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

 const [showCarEditModal, setShowCarEditModal] = useState<boolean>(false);
 const [targerCarData, setTargetCarData] = useState<ICar>();

 const { userAnnouncements, user, carUser, userCarData } =
  useContext(announcementPage);

 let novoNome;

 if (userCarData) {
  const nome = userCarData.name;
  const nomeSplit = nome.split(" ");
  novoNome = nomeSplit[0][0] + nomeSplit[1][0];
 }

 return (
  <>
   {carUser === user?.id ? (
    <div className={style.containerGeral}>
     <div className={style.backgroundBlue}></div>
     <div className={style.perfilUser}>
      <div
       className={style.imgPerfil}
       style={{ backgroundColor: userCarData?.color }}
      >
       {novoNome}
      </div>
      <div className={style.userData}>
       <h2>{userCarData?.name}</h2>
       <span>{userCarData?.accountType}</span>
      </div>
      <p>{userCarData?.description}</p>
      <Button
       onClick={() => {
        setModalIsOpen((prevState) => !prevState);
       }}
      >
       Criar Anuncio
      </Button>
     </div>

     <div className={style.containerCards}>
      <ul className={style.ulContainer}>
       {userAnnouncements.map((car: any) => {
        const price = car.price.toLocaleString("pt-BR", {
         minimumFractionDigits: 2,
         maximumFractionDigits: 2,
        });

        return (
         <CardAnnouncement
          key={car.id}
          user={true}
          carModel={car.model}
          carDescription={car.description}
          carImg={car.imagesUrl}
          carMiles={car.miles}
          carYear={car.year}
          price={price}
          isActive={car.isActive}
          setShowCarEditModal={setShowCarEditModal}
          setTargetCarData={setTargetCarData}
          car={car}
         />
        );
       })}
      </ul>
     </div>
     <div className={style.nextPrev}>
      <span>1 de 2</span>
      <a href="">Seguinte</a>
     </div>
    </div>
   ) : (
    <div className={style.containerGeral}>
     <div className={style.backgroundBlue}></div>
     <div className={style.perfilUser}>
      <div
       className={style.imgPerfil}
       style={{ backgroundColor: userCarData?.color }}
      >
       {novoNome}
      </div>
      <div className={style.userData}>
       <h2>{userCarData?.name}</h2>
       <span>{userCarData?.accountType}</span>
      </div>
      <p>{userCarData?.description}</p>
     </div>

     <div className={style.containerCards}>
      <ul className={style.ulContainer}>
       {userAnnouncements.map((car: any) => {
        const price = car.price.toLocaleString("pt-BR", {
         minimumFractionDigits: 2,
         maximumFractionDigits: 2,
        });

        return (
         <CardAnnouncement
          key={car.id}
          user={false}
          carModel={car.model}
          carDescription={car.description}
          carImg={car.imagesUrl}
          carMiles={car.miles}
          carYear={car.year}
          price={price}
          isActive={car.isActive}
          setShowCarEditModal={setShowCarEditModal}
          setTargetCarData={setTargetCarData}
          car={car}
         />
        );
       })}
      </ul>
     </div>
     <div className={style.nextPrev}>
      <span>1 de 2</span>
      <a href="">Seguinte</a>
     </div>
    </div>
   )}
   {modalIsOpen ? (
    <CreateAnnouncementModal closeModalFunc={setModalIsOpen} userData={user!} />
   ) : null}
   {showCarEditModal ? (
    <EditAnnouncementModal
     carActualData={targerCarData!}
     closeModalFunc={setShowCarEditModal}
    />
   ) : null}
  </>
 );
}
