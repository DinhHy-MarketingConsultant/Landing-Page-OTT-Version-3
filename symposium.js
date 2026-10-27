// OTT registration: show success only after a matching server receipt.
(()=>{
  const OTT_ENDPOINT='https://script.google.com/macros/s/AKfycbyAj6YRkIHL4aiBqZDSQSEMEYgWnHjFZPEQlX2RjPO2vgmd6m5ybSMiEya0oRL5m3t3/exec';
  const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('#siteNav');
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
  nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('is-open');toggle.setAttribute('aria-expanded','false')}});
  const form=document.querySelector('#regForm'),modal=document.querySelector('#successModal');
  const button=form.querySelector('button[type="submit"]');
  const status=document.createElement('p');status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.append(status);
  let pending=null,busy=false;
  form.addEventListener('submit',async e=>{
    e.preventDefault();if(busy||!form.reportValidity())return;
    if(!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(OTT_ENDPOINT)){status.textContent='Biểu mẫu chưa được kết nối. Vui lòng liên hệ ban tổ chức.';return;}
    const data=Object.fromEntries(new FormData(form));
    const fingerprint=JSON.stringify([data.fullname,data.phone,data.email,data.role]);
    if(!pending||pending.fingerprint!==fingerprint)pending={fingerprint,id:crypto.randomUUID()};
    const requestId=pending.id;
    busy=true;button.disabled=true;const label=button.textContent;button.textContent='Đang gửi…';status.textContent='Đang lưu đăng ký…';
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),45000);
    try{
      const response=await fetch(OTT_ENDPOINT,{method:'POST',body:new URLSearchParams({...data,requestId}),credentials:'omit',signal:controller.signal,redirect:'follow'});
      if(!response.ok)throw Error('HTTP');
      const result=await response.json();
      if(result.ok!==true||result.requestId!==requestId)throw Error('NOT_SAVED');
      document.querySelector('#modalTitle').textContent='Đã nhận đăng ký.';
      document.querySelector('#modalGreeting').textContent=`Chào ${data.fullname}, ban tổ chức đã nhận thông tin của bạn.`;
      status.textContent='Đã lưu đăng ký. Ban tổ chức sẽ liên hệ để hướng dẫn tiếp theo.';
      modal.showModal();form.reset();pending=null;
    }catch(err){
      status.textContent='Chưa xác nhận được kết quả lưu. Thông tin vẫn còn ở đây; hãy thử gửi lại hoặc liên hệ ban tổ chức để được hỗ trợ.';
    }finally{clearTimeout(timer);busy=false;button.disabled=false;button.textContent=label;}
  });
  document.querySelectorAll('.modal-close,.modal-done').forEach(b=>b.addEventListener('click',()=>modal.close()));
})();
