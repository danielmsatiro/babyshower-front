export interface IMessage {
  message: string;
  id: string;
  msgSuccess: string;
  read_message: boolean;
  parent_id: number;
  chat: string;
  createdAt: string;
}

export interface IChat {
  id: string;
  archived: boolean;
  parent_user: number;
  other_parent_user: number;
  messages: IMessage[];
}
