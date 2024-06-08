import * as monaco from 'monaco-editor';
import { Select } from './select';
import { Button } from './button';
import { fileManager } from "../cache";
import { DefaultTsConfig, TsConfigFileName } from "../typescript";
import { setTheme } from '../themes';

export const themeSelect = new Select('theme');
export const projectSelect = new Select('project');
export const fileSelect = new Select('file');
export const newProjectBtn = new Button('new_project');
export const delProjectBtn = new Button('delete_project');
export const addFileBtn = new Button('add_file');
export const delFileBtn = new Button('delete_file');

const defaultTheme = localStorage.getItem('monaco-theme');
if (defaultTheme) {
  themeSelect.value = defaultTheme;
  setTheme(monaco, defaultTheme);
}

const defaultProject = localStorage.getItem('current-project');
if (defaultProject) {
  projectSelect.value = defaultProject;
}

themeSelect.onChange(() => {
  localStorage.setItem('monaco-theme', themeSelect.value);
  setTheme(monaco, themeSelect.value);
});

projectSelect.onChange(() => { 
  localStorage.setItem('current-project', projectSelect.value);
});

newProjectBtn.onClick(() => { 
  const projectName = prompt("Please input project name:", 'helloworld');
  if (!projectName) {
    return
  }

  if (!/^[a-zA-Z0-9_-]+$/.test(projectName)) {
    alert('The project name is invalid.')
    return
  }

  fileManager.newProject(projectName, [{
    filepath: TsConfigFileName,
    content: DefaultTsConfig
  }]);
});

delProjectBtn.onClick(() => {
  const currentProject = projectSelect.value;
  const yes = confirm(`Confirm to delete project "${currentProject}"`);
  if (yes) {
    fileManager.deleteProject(currentProject);
  }
});

delFileBtn.onClick(() => { 
  if (fileSelect.value === TsConfigFileName) {
    alert('"/tsconfig.json" connot be deleted.')
    return
  }

  const currentProject = projectSelect.value;
  const currentFile = fileSelect.value;
  const yes = confirm(`Confirm to delete file "${currentFile}"`);
  if (yes) {
    fileManager.deleteFile(currentProject, currentFile);
  }
});

addFileBtn.onClick(async () => {
  const fileName = prompt("Please input file name:", '/src/index.ts');

  if (!fileName) {
    return
  }

  if (!/^\/([a-zA-Z0-9_-]+\/?)*(\.\w+)?$/.test(fileName)) {
    alert('The file name is invalid.');
    return;
  }

  if (!fileName.endsWith('.ts') && !fileName.endsWith('.json')) {
    alert('The file name is invalid, only `.ts` and `.json` supported.');
    return;
  }

  const currentProject = projectSelect.value;
  
  const files = await fileManager.geProjectFiles(currentProject);
  if (files.some(file => file.filepath === fileName)) {
    alert('The file name is exists.');
    return;
  }

  await fileManager.newOrUpdateFile({
    project: currentProject,
    filepath: fileName,
    content: '',
  });
});