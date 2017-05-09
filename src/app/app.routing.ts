import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent }            from './app.component';
import { AppGuidesComponent }      from './app.guides.component';
import { AppContainerComponent }   from './app.container.component';
import { AppDetailGuideComponent } from './app.detail.guide.component';

const appRoutes: Routes = [
	{ 
		path: '',
		component:  AppContainerComponent
	},
	{ 
		path: 'guides',
		component:  AppGuidesComponent
	},
	{ 
		path: 'guides/:id',
		component:  AppDetailGuideComponent
	},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
