import * as THREE from 'three';
import { ISceneEntity, SceneEntityBase } from '../../ThreeJsScaffold/scene.entity';
import { ISceneManager } from '../../ThreeJsScaffold/scene.manager';

export class DirectionalLight extends SceneEntityBase implements ISceneEntity {
  constructor(parentSceneManager: ISceneManager, private _isHelpersEnabled = false) {
    super(parentSceneManager);
  }

  init = () => {
    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(10, 10, 10);
    light.lookAt(0, 0, 0);
    light.castShadow = true;
    this._sceneEntityGroup.add(light);
    const helper = new THREE.DirectionalLightHelper(light, 5);
    if (!!this._isHelpersEnabled) this._sceneEntityGroup.add(helper);

    const light1 = new THREE.DirectionalLight(0xffffff);
    light1.position.set(-5, -5, -5);
    light1.lookAt(0, 0, 0);
    light1.castShadow = true;
    // this._sceneEntityGroup.add(light1);
    const helper1 = new THREE.DirectionalLightHelper(light1, 5);
    // if (!!this._isHelpersEnabled) this._sceneEntityGroup.add(helper1);

    // Finish
    this._isSceneEntityReady = true;
    this._parentSceneManager.attemptStart();
  };

  update = (time: number) => {
    // Move light around, etc.

    const t = time * 0.1;
    const x = 10 * Math.cos(Math.PI * t);
    const y = 10 * Math.sin(Math.PI * t);
    const z = 10;

    this._sceneEntityGroup.position.set(x, y, z);
  };
}
