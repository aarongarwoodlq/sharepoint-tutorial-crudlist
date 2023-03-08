# Crudlist webpart creation - instructions

1. Create template webpart
- IN COMMAND LINE:
	- yo @microsoft/sharepoint
		- enter solution name (e.g. 'crudlist')
		- select component type 'WebPart'
		- enter WebPart name (e.g. 'crudlist')
		- select template type 'React'

2. Go to $/config/serve.json and configure "initialPage" to point to your sharepoint tenant

3. Create component state file:
	- Go to $/src/webparts/crudlist/components and create new file 'ICrudlistState.ts'
	- Export empty state object from within ICrudlistState.ts:
		```
		export interface ICrudlistState {
	    
		} 
		```
	- Import this into ./Crudlist.tsx:

	ADD LINE:  
		
		import { ICrudlistState } from './ICrudlistState';
		

4. In return() function within Crudlist.tsx, replace contents of second div with:
   ```
   <div>
	   <div>
	      placeholder 1st column
		</div>
	</div>
	```

5. 
