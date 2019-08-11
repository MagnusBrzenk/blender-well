import * as THREE from 'three';
import { ISceneEntity, SceneEntityBase } from '../../ThreeJsScaffold/scene.entity';
import { ISceneManager } from '../../ThreeJsScaffold/scene.manager';

export class SimpleLight extends SceneEntityBase implements ISceneEntity {
  constructor(parentSceneManager: ISceneManager, private _strength: number = 1) {
    super(parentSceneManager);
  }

  init = () => {
    // Add ambient light
    this._sceneEntityGroup.add(new THREE.AmbientLight(0x333333, this._strength));

    // Finish
    this._isSceneEntityReady = true;
    this._parentSceneManager.attemptStart();

    // this.toggleLight();
  };

  update = (time: number) => {
    // Move light around, etc.
  };

  toggleLight = () => {
    console.log('', this._strength);
    this._sceneEntityGroup.traverse(child => (child.visible = !child.visible));
  };
}
