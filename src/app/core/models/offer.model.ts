export class Offer{
  id!: number;
  title!: string;
  position!: string;
  field!: string;
  work_style!: string;
  contract!: string;
  missions!: string[];
  profile!: string[];
  deadline!: Date;
  complementary_infos!: string;
  date?: Date = new Date();
  creatorId!: number;
}
