import * as THREE from 'three';
import { SceneManagerBase, ISceneManager } from '../ThreeJsScaffold/scene.manager';
import { MiscHelpers } from './ThreeJsSceneEntities/Helpers';
import { DirectionalLight } from './ThreeJsSceneEntities/DirectionalLight';
import { Square } from './ThreeJsSceneEntities/Square';
import { Shapes } from './ThreeJsSceneEntities/shapes';
import { SimpleLight } from './ThreeJsSceneEntities/SimpleLight';

export class DemoSceneManager extends SceneManagerBase implements ISceneManager {
  private _simpleLight: SimpleLight;

  constructor(container: HTMLElement) {
    super(container);

    // Style canvas
    container.style.backgroundColor = 'rgba(0,0,0,1)';

    this._camera.position.set(6, 6, 6);
    // this._camera.position.set(-8, 12, 15);

    this._simpleLight = new SimpleLight(this, 10);
    // this._simpleLight.toggleLight();

    // Create entities
    this._sceneEntities = [
      //
      // new DirectionalLight(this, true),
      // new MiscHelpers(this),
      this._simpleLight,
      new SimpleLight(this, 0.3),
      // new Square(this, 1),
      new Shapes(this, 1)
    ];

    // Set this as entities parent
    this._sceneEntities.forEach(el => el.init());

    this._simpleLight.toggleLight();

    this._updateCamera = this.updateCamera;
    const v = this._camera.position.clone();
    // this._camera.position.set(-8, 12, 15);
    // setTimeout(() => {
    //   console.log('????');
    //   this._camera.position.set(-8, 12, 17);
    // }, 2000);
  }

  updateCamera = (time: number) => {
    //
    // console.log(this._camera.position.toArray());
    // const t = time * 0.1;
    // const x = 6 * Math.cos(Math.PI * t);
    // const y = 6 * Math.sin(Math.PI * t);
    // const z = 6;
    // this._camera.position.set(x, y, z);
    // this._camera.lookAt(0, 0, 0);
  };

  toggleLight = () => {
    this._simpleLight.toggleLight();
  };
}
