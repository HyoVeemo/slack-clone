import Modal from "@components/Modal";
import { Button, Input, Label } from "@pages/SignUp/style";
import React, { VFC, useCallback } from "react";
import useInput from "@hooks/useInput";

interface Props {
  show: boolean,
  onCloseModal: () => void;
}


const CreateChanelModal: VFC<Props> = ({show, onCloseModal}) => {
  const [newChannel, onChangeNewChannel] = useInput('')
  const onCreateChannel  = useCallback(()=>{},[])
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={onCreateChannel}>
        <Label id="channel-label">
          <span> 채널 </span>
          <Input id="workspace" value={newChannel} onChange={onChangeNewChannel} />
        </Label>
        <Button type={"submit"}>생성하기</Button>
      </form>
    </Modal>
  );
};


export default CreateChanelModal;
