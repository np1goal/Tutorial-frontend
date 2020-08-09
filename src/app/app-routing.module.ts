import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HtmlTutorialComponent } from './html-tutorial/html-tutorial.component';
import { CssTutorialComponent } from './css-tutorial/css-tutorial.component';
import { CssAnimationTutorialComponent } from './css-tutorial/css-animation-tutorial/css-animation-tutorial.component';
import { ScssSassTutorialComponent } from './scss-sass-tutorial/scss-sass-tutorial.component';
import { JavascriptTutorialComponent } from './javascript-tutorial/javascript-tutorial.component';
import { Angular8TutorialComponent } from './angular8-tutorial/angular8-tutorial.component';
import { JqueryTutorialComponent } from './jquery-tutorial/jquery-tutorial.component';
import { NodejsTutorialComponent } from './nodejs-tutorial/nodejs-tutorial.component';
import { SqlTutorialComponent } from './sql-tutorial/sql-tutorial.component';
import { JsDomTutorialComponent } from './js-dom-tutorial/js-dom-tutorial.component';
import { JsBomTutorialComponent } from './js-bom-tutorial/js-bom-tutorial.component';
import { JsJsonTutorialComponent } from './js-json-tutorial/js-json-tutorial.component';
import { AjaxTutorialComponent } from './ajax-tutorial/ajax-tutorial.component';
import { JqueryEffectsTutorialComponent } from './jquery-tutorial/jquery-effects-tutorial/jquery-effects-tutorial.component';
import { QuizComponent } from './quiz/quiz.component';
import { ThreejsTutorialComponent } from './threejs-tutorial/threejs-tutorial.component';
import { ThreejsBasicComponent } from './threejs-tutorial/threejs-basic/threejs-basic.component';
import { ThreejsGeometryTypesComponent } from './threejs-tutorial/threejs-geometry-types/threejs-geometry-types.component';
import { ThreejsRainEffectComponent } from './threejs-tutorial/threejs-rain-effect/threejs-rain-effect.component';
import { ThreejsArt1Component } from './threejs-tutorial/threejs-art1/threejs-art1.component';
import { ThreejsBackgroundLinesComponent } from './threejs-tutorial/threejs-background-lines/threejs-background-lines.component';
import { ThreejsMoonBackgroundComponent } from './threejs-tutorial/threejs-moon-background/threejs-moon-background.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "html-tutorial", component: HtmlTutorialComponent},
  {path: "css-tutorial", component: CssTutorialComponent},
  {path: "css-tutorial/css-animation-tutorial", component: CssAnimationTutorialComponent},
  {path: "scss-sass-tutorial", component: ScssSassTutorialComponent},
  {path: "javascript-tutorial", component: JavascriptTutorialComponent},
  {path: "angular8-tutorial", component: Angular8TutorialComponent},
  {path: "jsdom-tutorial", component: JsDomTutorialComponent},
  {path: "jsbom-tutorial", component: JsBomTutorialComponent},
  {path: "ajax-tutorial", component: AjaxTutorialComponent},
  {path: "jsjson-tutorial", component: JsJsonTutorialComponent},
  {path: "jquery-tutorial", component: JqueryTutorialComponent},
  {path: "jquery-tutorial/jqueryeffects-tutorial", component: JqueryEffectsTutorialComponent},
  {path: "nodejs-tutorial", component: NodejsTutorialComponent},
  {path: "threejs-tutorial", component: ThreejsTutorialComponent},
  {path: "threejs-tutorial/threejs-basic", component: ThreejsBasicComponent},
  {path: "threejs-tutorial/threejs-geometry-types", component: ThreejsGeometryTypesComponent},
  {path: "threejs-tutorial/threejs-rain-effect", component: ThreejsRainEffectComponent},
  {path: "threejs-tutorial/threejs-art1", component: ThreejsArt1Component},
  {path: "threejs-tutorial/threejs-background-lines", component: ThreejsBackgroundLinesComponent},
  {path: "threejs-tutorial/threejs-moon-background", component: ThreejsMoonBackgroundComponent},
  {path: "quiz", component: QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, HtmlTutorialComponent, 
                                  CssTutorialComponent, CssAnimationTutorialComponent, 
                                  ScssSassTutorialComponent, JavascriptTutorialComponent, 
                                  JqueryTutorialComponent, Angular8TutorialComponent, 
                                  NodejsTutorialComponent, SqlTutorialComponent, 
                                  AjaxTutorialComponent, JsDomTutorialComponent, 
                                  JsBomTutorialComponent, JqueryTutorialComponent, 
                                  JqueryEffectsTutorialComponent, JsJsonTutorialComponent, 
                                  ThreejsTutorialComponent, ThreejsBasicComponent, 
                                  ThreejsGeometryTypesComponent, ThreejsRainEffectComponent, 
                                  ThreejsArt1Component, ThreejsBackgroundLinesComponent, 
                                  ThreejsMoonBackgroundComponent, QuizComponent];