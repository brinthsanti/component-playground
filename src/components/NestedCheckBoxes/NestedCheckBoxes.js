import React, { useContext, useState, useRef } from "react";
import cloneDeep from "lodash/cloneDeep";




export function transform({ config, ids, checked = false, isReset }) {
  config.forEach((element, index) => {
    if (element.children) {
      config[index].isParent = true;
    }

    if (isReset) {
      // Reset all elements' checked property to false
      config[index].checked = false;
    } else {
      if (ids.includes(element.id)) {
        config[index].checked = checked;
      }
    }

    if (element.children) {
      // Recursively call transform and capture the result
      const transformedChildren = transform({ config: element.children, ids, checked, isReset });

      // Update the current element's children with the transformed result
      config[index].children = transformedChildren;
    }
  });

  return config;
}



function getParentByChildId(checks, id) {
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].id === id) {
      return checks;
    }

    if (checks[i].children) {
      const result = getParentByChildId(checks[i].children, id);
      if (result) {
        return result; // Return if the ID is found in the children
      }
    }
  }

  // If the ID is not found in the current checks or their children
  return undefined;
}

function getIds(checks) {
  let result = [];

  checks.forEach((check) => {
    result.push(check.id);

    if (check.children) {
      // Concatenate the result of the recursive call
      result = result.concat(getIds(check.children));
    }
  });

  return result;
}

export default function NestedCheckBoxes({ checks, setCheckboxes, checkboxes, parentId }) {
  return (
    <>
      {checks.map((checkbox, index) => (
        <Checkboxes
          key={checkbox.id}
          checkbox={checkbox}
          setCheckboxes={setCheckboxes}
          checkboxes={checkboxes}
          parentId={parentId}
        />
      ))}
    </>
  );
}

function Checkboxes({ checkbox, setCheckboxes, checkboxes, parentId }) {
  const cpy = cloneDeep(checkboxes);

  function handleCheck(id, checkbox) {

    if(checkbox.isParent){
      const ids = [id, ...getIds(checkbox.children)];
      ids.forEach(id => {
        transform({config: cpy, ids: [id], checked: !checkbox.checked});
      })
     
    }else {
      transform({config: cpy, ids: [id], checked: !checkbox.checked});   
      const parent = getParentByChildId(cpy, id);
      console.log('parent', parentId);
      const allChildChecked = parent.every(item => item.checked === true);
      
           // if every child is checked then mark parent as active
           if(allChildChecked){
            // console.log(allChildChecked);
            transform({config: cpy, ids: [parentId], checked: true});
           }
    }
    setCheckboxes(cpy);
  }
  return (
    <div>
      <label htmlFor="coding">{checkbox.label}</label>
      <input
        type="checkbox"
        id="coding"
        name="interest"
        value="coding"
        checked={checkbox.checked}
        onChange={()=>handleCheck(checkbox.id, checkbox)}
      />
      {checkbox.children && (
        <div style={{ marginLeft: "20px" }}>
          <NestedCheckBoxes
            checks={checkbox.children}
            setCheckboxes={setCheckboxes}
            checkboxes={checkboxes}
            parentId={checkbox.id}
          />
        </div>
      )}
    </div>
  );
}
