import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp"


export interface ICrudlistProps {
  description: string;
  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  context: WebPartContext;
  SPContext: SPFI;
  listName: string;
  taxonomyRoot: string;

}
